import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { ArticleMenuItem } from '../models/article-menu-item.model';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class GitHubService {

  constructor(private _http: HttpClient) { }

  getArticle(item: ArticleMenuItem): Observable<string> {
    let url = environment.githubBaseUrl + "/" + item.Path;

    return this._http.get(url, { responseType: 'text' });
  }
}
