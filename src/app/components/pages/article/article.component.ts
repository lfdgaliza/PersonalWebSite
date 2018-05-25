import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../../services/git-hub.service';
import { ArticlesMenuService } from '../../../services/articles-menu.service';

@Component({
  selector: 'gl-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [GitHubService, ArticlesMenuService]
})
export class ArticleComponent implements OnInit {

  constructor(
    private _gitHubService: GitHubService,
    private _articlesMenuService: ArticlesMenuService) { }
  public article: string;
  ngOnInit() {
    // this._gitHubService.getArticle().subscribe(result => {
    //   this.article = result;
    // });

    this._articlesMenuService.get().subscribe(result => {

      result.forEach(r => {
        console.log(r.Path);
      });


    });
  }

}
