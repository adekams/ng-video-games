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
  getGames(order: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('order', order);

    if (search) {
      params = new HttpParams().set('order', order).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.API_URL}/games`, {
      params: params,
    });
  }
}
