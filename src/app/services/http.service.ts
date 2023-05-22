import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { APIResponse, Game } from '../models/app-filter/app-filter';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getGames(
    order: string,
    page: any,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', order).set('page', page);

    if (search) {
      params = new HttpParams()
        .set('or', order)
        .set('page', page)
        .set('search', search);
    }

    console.log('outside type is ' + typeof page);
    return this.http.get<APIResponse<Game>>(`${env.API_URL}/games`, {
      params: params,
    });
  }
}
