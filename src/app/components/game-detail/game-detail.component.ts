import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Game, Ratings } from '../../models/app-filter/app-filter';
import { GameStateService } from '../../services/game-state.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly gameState = inject(GameStateService);
  private readonly http = inject(HttpService);

  readonly game = signal<Game | null>(null);
  readonly isLoading = signal(false);
  readonly isModalOpen = signal(false);
  readonly selectedScreenshotIndex = signal(0);
  readonly isTransitioning = signal(false);
  readonly transitionDuration = 0.5; // seconds

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Use cached game from service if it matches the route ID
    const cached = this.gameState.game();
    if (cached && cached.id === id) {
      this.game.set(cached);
      return;
    }

    // Otherwise fetch from API (handles refresh, deep-link, shared URL)
    if (id) {
      this.isLoading.set(true);
      this.http.getGameById(id).subscribe({
        next: (g) => {
          this.game.set(g);
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
          void this.router.navigate(['/all-games']);
        },
      });
    } else {
      void this.router.navigate(['/all-games']);
    }
  }

  onTagHover(event: MouseEvent, isEnter: boolean): void {
    const el = event.target as HTMLElement;
    el.style.backgroundColor = isEnter
      ? 'rgba(78, 205, 196, 0.3)'
      : 'rgba(78, 205, 196, 0.15)';
  }

  // --- Screenshot Gallery ---

  openScreenshot(index: number): void {
    this.selectedScreenshotIndex.set(index);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    document.body.style.overflow = 'auto';
  }

  selectScreenshot(index: number): void {
    if (index === this.selectedScreenshotIndex()) return;
    this.isTransitioning.set(true);
    this.selectedScreenshotIndex.set(index);
    setTimeout(
      () => this.isTransitioning.set(false),
      this.transitionDuration * 1000,
    );
  }

  nextScreenshot(): void {
    const screenshots = this.game()?.short_screenshots;
    if (screenshots?.length && !this.isTransitioning()) {
      this.selectScreenshot(
        (this.selectedScreenshotIndex() + 1) % screenshots.length,
      );
    }
  }

  previousScreenshot(): void {
    const screenshots = this.game()?.short_screenshots;
    if (screenshots?.length && !this.isTransitioning()) {
      this.selectScreenshot(
        (this.selectedScreenshotIndex() - 1 + screenshots.length) %
          screenshots.length,
      );
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen()) this.closeModal();
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): void {
    if (this.isModalOpen()) this.nextScreenshot();
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): void {
    if (this.isModalOpen()) this.previousScreenshot();
  }

  // --- Rating helpers ---

  getRatingPercentage(rating: Ratings): number {
    const ratings = this.game()?.ratings;
    if (!ratings?.length || !rating) return 0;
    const total = ratings.reduce((sum, r) => sum + (r.count || 0), 0);
    return total > 0 ? Math.round(((rating.count || 0) / total) * 100) : 0;
  }

  getRatingColor(title: string): string {
    const t = title.toLowerCase();
    if (t.includes('exceptional') || t.includes('recommended'))
      return '#4ecdc4';
    if (t.includes('meh')) return '#ffd93d';
    if (t.includes('skip')) return '#ff6b6b';
    return '#9b9ba5';
  }
}
