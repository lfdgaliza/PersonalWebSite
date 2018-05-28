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

  constructor(
    private _gitHubService: GitHubService,
    private _articlesMenuService: ArticlesMenuService,
    private _markdownService: MarkdownService) { }

  ngOnInit() {

    this._articlesMenuService.getAll().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

  showArticle(item: ArticleMenuItem) {

    console.log(item);




    this._markdownService.renderer.image = (href: string, title: string, text: string) => {
      console.log(href, title, text);

      if (href.startsWith("/")) {
        let indexFirstBar = item.Path.indexOf("/");
        let repoName = item.Path.substring(0, indexFirstBar);
        href = `${environment.githubBaseUrl}/${repoName}/master${href}`;
      }

      return `<img src="${href}" class="img-fluid" />`;
    }

    this._gitHubService.getArticle(item).subscribe(result => {
      this.article = result;
    });
  }

}
