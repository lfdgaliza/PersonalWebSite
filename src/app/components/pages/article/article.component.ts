import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../../services/git-hub.service';
import { ArticlesMenuService } from '../../../services/articles-menu.service';
import { BaseMenuItem } from '../../../models/base/base-menu-item.model';
import { ArticleMenuItem } from '../../../models/article-menu-item.model';
import { MarkdownService } from 'ngx-markdown';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'gl-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [GitHubService, ArticlesMenuService]
})
export class ArticleComponent implements OnInit {

  public article: string;
  public menuItems: ArticleMenuItem[];
  public articleLoading: boolean = false;
  public menuLoading: boolean = false;
  public goToSource: string;

  constructor(
    private _gitHubService: GitHubService,
    private _articlesMenuService: ArticlesMenuService,
    private _markdownService: MarkdownService) { }

  ngOnInit() {
    this.menuLoading = true;
    this._articlesMenuService.getAll().subscribe(menuItems => {
      this.menuItems = menuItems;
      this.menuLoading = false;
      this.showArticle(<ArticleMenuItem>this.menuItems[0].Children[0].Children[0]);
    });
  }

  showArticle(item: ArticleMenuItem) {
    this.goToSource = undefined;
    this.articleLoading = true;
    let indexFirstBarOfItemPath = item.Path.indexOf("/");

    this._markdownService.renderer.image = (href: string, title: string, text: string) => {
      if (href.startsWith("/")) {
        let repoName = item.Path.substring(0, indexFirstBarOfItemPath);
        href = `${environment.githubRawBaseUrl}/${repoName}/master${href}`;
      }

      return `<img src="${href}" class="img-fluid" />`;
    }

    this._gitHubService.getArticle(item).subscribe(result => {
      this.article = result;
      this.articleLoading = false;
      this.generateGoToSourceUrl(item, indexFirstBarOfItemPath);
    });
  }


  private generateGoToSourceUrl(item: ArticleMenuItem, indexFirstBarOfItemPath: number) {
    // insert tree
    this.goToSource = `${item.Path.slice(0, indexFirstBarOfItemPath)}/tree${item.Path.slice(indexFirstBarOfItemPath)}`;
    // remove readme at the end
    this.goToSource = this.goToSource.slice(0, this.goToSource.lastIndexOf("/"));
    // append base url
    this.goToSource = `${environment.githubBaseUrl}/${this.goToSource}`;
  }
}
