import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ArticleMenuItem } from '../models/article-menu-item.model';


@Injectable()
export class ArticlesMenuService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<ArticleMenuItem[]> {
    return this._http
      .get(environment.articlesMenuApiUrl, { responseType: 'json' })
      .map(response => this.mapResponse(<ArticleMenuItem[]>(<any>response).Items));
  }

  private mapResponse(flatItems: ArticleMenuItem[]) {
    let itemsFirstLevel = flatItems.filter(item => item.ParentItemMenuId == 0);
    itemsFirstLevel.forEach(item => {
      item.Children = this.getNextLevel(item, flatItems);
    });
    return itemsFirstLevel;
  }

  private getNextLevel(item: ArticleMenuItem, flatItems: ArticleMenuItem[]) {
    let nextLevel = flatItems.filter(nextItem => nextItem.ParentItemMenuId == item.ItemMenuId);

    nextLevel.forEach(nextLevelItem => {
      nextLevelItem.Children = this.getNextLevel(nextLevelItem, flatItems);
    });

    return nextLevel;
  }
}
