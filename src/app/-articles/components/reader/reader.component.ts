import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../services/git-hub.service';

@Component({
  selector: 'gl-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
  providers: [GitHubService]
})
export class ReaderComponent implements OnInit {

  constructor(private _gitHubService: GitHubService) { }
  public article: string;
  ngOnInit() {
    this._gitHubService.getArticle().subscribe(result => {
      this.article = result;
    });
  }

}
