import { Injectable, signal } from '@angular/core';
import { Game } from '../models/app-filter/app-filter';

@Injectable({ providedIn: 'root' })
export class GameStateService {
  private readonly selectedGame = signal<Game | null>(null);

  /** Readonly signal of the currently cached game */
  readonly game = this.selectedGame.asReadonly();

  /** Cache a game before navigating to detail */
  select(game: Game): void {
    this.selectedGame.set(game);
  }

  /** Clear the cache on leaving details page */
  clear(): void {
    this.selectedGame.set(null);
  }
}
