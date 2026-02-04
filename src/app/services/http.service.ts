import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { APIResponse, Game } from '../models/app-filter/app-filter';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  getGames(
    order: string,
    page: number,
    search?: string,
    pageSize = 100,
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams()
      .set('ordering', order)
      .set('page', page.toString())
      .set('page_size', pageSize.toString());

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.API_URL}/games`, {
      params: params,
    });
  }

  getGamesSignal(
    order: Signal<string>,
    page: Signal<number>,
    search?: Signal<string>,
  ): Signal<APIResponse<Game> | undefined> {
    return toSignal(
      new Observable((observer) => {
        const currentOrder = order();
        const currentPage = page();
        const currentSearch = search?.();

        this.getGames(currentOrder, currentPage, currentSearch).subscribe({
          next: (result) => observer.next(result),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        });
      }),
      { initialValue: undefined },
    );
  }
}
