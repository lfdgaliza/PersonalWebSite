import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MenuItem } from '../models/menu-item.model';
import { Observable } from 'rxjs';

@Injectable()
export class ArticlesMenuService {

  constructor(private _http: HttpClient) { }

  get(): Observable<MenuItem[]> {
    let url = "https://blmvayqswe.execute-api.us-east-1.amazonaws.com/Production/articles/menu";

    return this._http
      .get(url, { responseType: 'json' })
      .map(response => <MenuItem[]>(<any>response).Items);
  }
}
