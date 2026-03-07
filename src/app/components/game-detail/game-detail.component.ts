import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent {
  game = signal(this.getGame());
  isModalOpen = signal(false);
  selectedScreenshotIndex = signal(0);
  isTransitioning = signal(false);
  transitionDuration = 0.5; // seconds

  constructor() {
    console.log('game ', this.game());
  }

  onTagHover(event: MouseEvent, isEnter: boolean): void {
    const element = event.target as HTMLElement;
    if (isEnter) {
      element.style.backgroundColor = 'rgba(78, 205, 196, 0.3)';
    } else {
      element.style.backgroundColor = 'rgba(78, 205, 196, 0.15)';
    }
  }

  // Screenshot Gallery Methods
  openScreenshot(index: number): void {
    this.selectedScreenshotIndex.set(index);
    this.isModalOpen.set(true);
    if (typeof globalThis !== 'undefined' && globalThis.document) {
      globalThis.document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    if (typeof globalThis !== 'undefined' && globalThis.document) {
      globalThis.document.body.style.overflow = 'auto';
    }
  }

  selectScreenshot(index: number): void {
    if (index === this.selectedScreenshotIndex()) return;
    this.isTransitioning.set(true);
    this.selectedScreenshotIndex.set(index);

    // Remove transition state after animation completes
    setTimeout(() => {
      this.isTransitioning.set(false);
    }, this.transitionDuration * 1000);
  }

  nextScreenshot(): void {
    const game = this.game();
    if (game?.short_screenshots?.length && !this.isTransitioning()) {
      const nextIndex =
        (this.selectedScreenshotIndex() + 1) % game.short_screenshots.length;
      this.selectScreenshot(nextIndex);
    }
  }

  previousScreenshot(): void {
    const game = this.game();
    if (game?.short_screenshots?.length && !this.isTransitioning()) {
      const prevIndex =
        (this.selectedScreenshotIndex() -
          1 +
          game.short_screenshots.length) %
        game.short_screenshots.length;
      this.selectScreenshot(prevIndex);
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen()) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): void {
    if (this.isModalOpen()) {
      this.nextScreenshot();
    }
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): void {
    if (this.isModalOpen()) {
      this.previousScreenshot();
    }
  }

  // Rating Methods - Calculate Google Play style percentages
  getRatingPercentage(rating: { count?: number }): number {
    const game = this.game();
    if (!game?.ratings || !rating) return 0;
    const total = game.ratings.reduce(
      (sum: number, r: { count?: number }) => sum + (r.count || 0),
      0,
    );
    return total > 0 ? Math.round(((rating?.count || 0) / total) * 100) : 0;
  }

  getRatingColor(title: string): string {
    const titleLower = title.toLowerCase();
    if (
      titleLower.includes('exceptional') ||
      titleLower.includes('recommended')
    ) {
      return '#4ecdc4';
    } else if (titleLower.includes('meh')) {
      return '#ffd93d';
    } else if (titleLower.includes('skip')) {
      return '#ff6b6b';
    }
    return '#9b9ba5';
  }

  private getGame() {
    if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
      const gameData = globalThis.localStorage.getItem('game');
      return gameData ? JSON.parse(gameData) : null;
    }
    return null;
  }
}
