import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class GitHubService {

  constructor(private _http: HttpClient) { }

  getArticle(): Observable<string> {
    let url = "https://cdn.rawgit.com/lfdgaliza/DesignPatterns/master/Behavioral/Observer/Readme.md";

    return this._http.get(url, { responseType: 'text' })
      .pipe(
        tap( // Log the result or error
          data => console.log(data),
          error => console.error(error)
        )
      );;
  }
}
