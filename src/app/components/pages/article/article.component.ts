import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../../services/git-hub.service';

@Component({
  selector: 'gl-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [GitHubService]
})
export class ArticleComponent implements OnInit {

  constructor(private _gitHubService: GitHubService) { }
  public article: string;
  ngOnInit() {
    this._gitHubService.getArticle().subscribe(result => {
      this.article = result;
    });
  }

}
