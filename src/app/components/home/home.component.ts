import {
  Component,
  OnInit,
  signal,
  computed,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { APIResponse, Game } from 'src/app/models/app-filter/app-filter';
import { HttpService } from '../../services/http.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';

interface SortOption {
  name: string;
  value: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollTrigger') scrollTrigger!: ElementRef;

  // Constants
  private readonly SORT_OPTIONS: SortOption[] = [
    { name: 'Name', value: 'name' },
    { name: 'Released', value: '-released' },
    { name: 'Added', value: '-added' },
    { name: 'Created', value: '-created' },
    { name: 'Updated', value: '-updated' },
    { name: 'Rating', value: '-rating' },
    { name: 'Metacritic', value: 'metacritic' },
  ];

  readonly noImg =
    'https://res.cloudinary.com/adenike/image/upload/v1642002314/no-image_iah8ux.png';
  readonly sortOptions = this.SORT_OPTIONS;

  // === STATE SIGNALS ===
  // Primary state signals - these control the data fetching
  private readonly selectedSortOptionIndex = signal(0); // Index into SORT_OPTIONS
  private readonly sortOrder = signal<'asc' | 'desc'>('desc');
  private readonly searchQuery = signal<string | undefined>(undefined);
  private readonly currentPage = signal(1);
  private readonly isLoading = signal(false);

  // Data signals
  private readonly allGames = signal<Game[]>([]);
  readonly hasMoreGames = signal(true);

  // === COMPUTED SIGNALS ===
  // Derived state - read-only, computed from primary signals
  readonly selectedSortOption = computed(
    () => this.SORT_OPTIONS[this.selectedSortOptionIndex()],
  );
  readonly sortOrderValue = computed(() => this.sortOrder());
  readonly games = computed(() => this.allGames());
  readonly pending = computed(() => this.isLoading());
  readonly gameCount = computed(() => this.allGames().length);
  readonly shouldShowEndMessage = computed(
    () => !this.hasMoreGames() && this.gameCount() > 0,
  );
  readonly shouldShowEmptyState = computed(
    () => this.gameCount() === 0 && !this.isLoading(),
  );

  // === INITIALIZATION FLAG ===
  private isInitialized = false;

  constructor(
    private readonly http: HttpService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    // Listen to route param changes for search queries
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchQuery.set(params['game-search']);
      } else {
        this.searchQuery.set(undefined);
      }
      this.resetAndLoadGames();
    });

    // Mark as initialized and trigger initial load
    this.isInitialized = true;
    this.loadMoreGames();
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  /**
   * Reset pagination and load the first page of games
   */
  private resetAndLoadGames(): void {
    this.allGames.set([]);
    this.currentPage.set(1);
    this.hasMoreGames.set(true);
    this.loadMoreGames();
  }

  /**
   * Load the next page of games and append to existing list
   */
  loadMoreGames(): void {
    // Guard 1: Already loading
    if (this.isLoading()) {
      return;
    }

    // Guard 2: No more games available
    if (!this.hasMoreGames()) {
      return;
    }

    // Guard 3: Not initialized yet
    if (!this.isInitialized) {
      return;
    }

    this.isLoading.set(true);
    const pageToLoad = this.currentPage();
    const orderParam = this.buildSortParam();
    const search = this.searchQuery();

    this.http.getGames(orderParam, pageToLoad, search, 100).subscribe({
      next: (response: APIResponse<Game>) => {
        const newGames = response.results || [];
        const existingGames = this.allGames();

        // Append new games to the list
        this.allGames.set([...existingGames, ...newGames]);

        // Determine if more games are available
        const totalLoaded = this.allGames().length;
        const totalAvailable = response.count || 0;
        const hasMore = newGames.length > 0 && totalLoaded < totalAvailable;

        this.hasMoreGames.set(hasMore);
        this.currentPage.set(pageToLoad + 1);
        this.isLoading.set(false);

        console.log(
          `[Games Loaded] Page: ${pageToLoad}, New: ${newGames.length}, Total: ${totalLoaded}/${totalAvailable}`,
        );
      },
      error: (error: unknown) => {
        console.error('[Games Load Error]', error);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Handle sort option selection from dropdown
   */
  onSortOptionChange(option: SortOption): void {
    const index = this.SORT_OPTIONS.findIndex(
      (opt) => opt.value === option.value,
    );
    if (index !== -1 && index !== this.selectedSortOptionIndex()) {
      this.selectedSortOptionIndex.set(index);
      this.resetAndLoadGames();
    }
  }

  /**
   * Handle sort order toggle (asc/desc)
   */
  onSortResults(order: 'asc' | 'desc'): void {
    if (order !== this.sortOrder()) {
      this.sortOrder.set(order);
      this.resetAndLoadGames();
    }
  }

  /**
   * Build the sort parameter with order prefix
   */
  private buildSortParam(): string {
    const sortValue = this.selectedSortOption().value;
    const order = this.sortOrder();

    if (order === 'asc') {
      return sortValue.startsWith('-') ? sortValue.substring(1) : sortValue;
    } else {
      return sortValue.startsWith('-') ? sortValue : `-${sortValue}`;
    }
  }

  /**
   * Navigate to game detail page
   */
  goToItem(item: Game): void {
    if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
      globalThis.localStorage.setItem('game', JSON.stringify(item));
    }
    this.router.navigateByUrl('detail');
  }

  /**
   * Convert platform name to lowercase for asset lookup
   */
  convertPlatformNametoLowercase(name: string | undefined): string {
    return name?.toLowerCase() ?? '';
  }

  /**
   * Setup intersection observer for infinite scroll
   * Triggers loadMoreGames when scroll trigger comes into view
   */
  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('[Infinite Scroll] IntersectionObserver not supported');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Only load if: trigger is intersecting, more games exist, and not already loading
        if (
          entries[0]?.isIntersecting &&
          this.hasMoreGames() &&
          !this.isLoading()
        ) {
          this.loadMoreGames();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Start loading 100px before reaching bottom
      },
    );

    // Observe the scroll trigger element
    if (this.scrollTrigger?.nativeElement) {
      observer.observe(this.scrollTrigger.nativeElement);
    }
  }
}
