import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../../services/git-hub.service';
import { ArticlesMenuService } from '../../../services/articles-menu.service';
import { BaseMenuItem } from '../../../models/base/base-menu-item.model';

@Component({
  selector: 'gl-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [GitHubService, ArticlesMenuService]
})
export class ArticleComponent implements OnInit {

  public article: string;
  public menuItems: BaseMenuItem[];

  constructor(
    private _gitHubService: GitHubService,
    private _articlesMenuService: ArticlesMenuService) { }

  ngOnInit() {
    // this._gitHubService.getArticle().subscribe(result => {
    //   this.article = result;
    // });

    this._articlesMenuService.getAll().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

}
