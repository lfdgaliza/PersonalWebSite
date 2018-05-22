import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitHubService {

  constructor(private _http: HttpClient) { }

  getArticle(): Observable<string> {
    let url = "https://cdn.rawgit.com/lfdgaliza/DesignPatterns/master/Creational/Singleton/Readme.md";

    return this._http.get(url, { responseType: 'text' });
  }
}
