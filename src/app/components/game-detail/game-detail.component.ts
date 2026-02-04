import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  game = this.getGame();
  isModalOpen = false;
  selectedScreenshotIndex = 0;
  isTransitioning = false;
  transitionDuration = 0.5; // seconds

  constructor() {
    console.log('game ', this.game);
  }

  ngOnInit(): void {}

  onTagHover(event: MouseEvent, isEnter: boolean): void {
    const element = event.target as HTMLElement;
    if (isEnter) {
      element.style.background = 'rgba(78, 205, 196, 0.3)';
    } else {
      element.style.background = 'rgba(78, 205, 196, 0.15)';
    }
  }

  // Screenshot Gallery Methods
  openScreenshot(index: number): void {
    this.selectedScreenshotIndex = index;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  selectScreenshot(index: number): void {
    if (index === this.selectedScreenshotIndex) return;
    this.isTransitioning = true;
    this.selectedScreenshotIndex = index;

    // Remove transition state after animation completes
    setTimeout(() => {
      this.isTransitioning = false;
    }, this.transitionDuration * 1000);
  }

  nextScreenshot(): void {
    if (this.game?.short_screenshots?.length && !this.isTransitioning) {
      const nextIndex =
        (this.selectedScreenshotIndex + 1) % this.game.short_screenshots.length;
      this.selectScreenshot(nextIndex);
    }
  }

  previousScreenshot(): void {
    if (this.game?.short_screenshots?.length && !this.isTransitioning) {
      const prevIndex =
        (this.selectedScreenshotIndex -
          1 +
          this.game.short_screenshots.length) %
        this.game.short_screenshots.length;
      this.selectScreenshot(prevIndex);
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): void {
    if (this.isModalOpen) {
      this.nextScreenshot();
    }
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): void {
    if (this.isModalOpen) {
      this.previousScreenshot();
    }
  }

  // Rating Methods - Calculate Google Play style percentages
  getRatingPercentage(rating: any): number {
    if (!this.game?.ratings || !rating) return 0;
    const total = this.game.ratings.reduce(
      (sum: number, r: any) => sum + (r.count || 0),
      0,
    );
    return total > 0 ? Math.round((rating.count / total) * 100) : 0;
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
    const gameData = localStorage.getItem('game');
    return gameData ? JSON.parse(gameData) : null;
  }
}
