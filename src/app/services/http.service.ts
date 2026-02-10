import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, Signal, signal, effect } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { APIResponse, Game } from '../models/app-filter/app-filter';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private http = inject(HttpClient);

  fetchGamesReactive(
    order: Signal<string>,
    page: Signal<number>,
    search?: Signal<string>,
  ) {
    const allGames = signal<Game[]>([]);
    const hasMoreGames = signal(true);
    const isLoading = signal(false);

    // Effect reacts to changes in order, page, or search
    effect(() => {
      const currentOrder = order();
      const currentPage = page();
      const currentSearch = search?.();

      // Guard
      if (isLoading() || !hasMoreGames()) return;

      isLoading.set(true);

      // Convert Observable to signal
      const apiResponse = toSignal(
        this.getGames(currentOrder, currentPage, currentSearch),
        { initialValue: undefined },
      );

      // Get the value synchronously when available
      const response: APIResponse<Game> | undefined = apiResponse();

      if (response) {
        const newGames = response.results ?? [];
        allGames.set([...allGames(), ...newGames]);

        const totalLoaded = allGames().length;
        const totalAvailable = response.count ?? 0;
        hasMoreGames.set(newGames.length > 0 && totalLoaded < totalAvailable);

        isLoading.set(false);
      }
    });

    return { allGames, hasMoreGames, isLoading };
  }

  getGames(order: string, page: number, search?: string, pageSize = 100) {
    let params = new HttpParams()
      .set('ordering', order)
      .set('page', page.toString())
      .set('page_size', pageSize.toString());

    if (search) params = params.set('search', search);

    return this.http.get<APIResponse<Game>>(`${env.API_URL}/games`, { params });
  }
}
