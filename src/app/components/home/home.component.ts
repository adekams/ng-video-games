import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  inject,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { Game } from 'src/app/models/app-filter/app-filter';

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
  private readonly http: HttpService = inject(HttpService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  @ViewChild('scrollTrigger', { static: false })
  private scrollTrigger!: ElementRef<HTMLDivElement>;

  // Constants
  readonly SORT_OPTIONS: SortOption[] = [
    { name: 'Name', value: 'name' },
    { name: 'Released', value: '-released' },
    { name: 'Added', value: '-added' },
    { name: 'Created', value: '-created' },
    { name: 'Updated', value: '-updated' },
    { name: 'Rating', value: '-rating' },
    { name: 'Metacritic', value: 'metacritic' },
  ];

  // State Signals
  readonly sortIndex = signal<number>(0);
  readonly sortOrder = signal<'asc' | 'desc'>('desc');
  readonly searchQuery = signal<string | undefined>(undefined);
  readonly currentPage = signal<number>(1);
  readonly isLoading = signal<boolean>(false);

  // Computed Signals
  readonly selectedSortOption = computed<SortOption>(
    () => this.SORT_OPTIONS[this.sortIndex()],
  );
  readonly sortOrderValue = computed<'asc' | 'desc'>(() => this.sortOrder());
  readonly sortParam = computed<string>(() => this.buildSortParam());

  // Data Signals (Reactive API)
  readonly games = signal<Game[]>([]);
  readonly hasMore = signal<boolean>(true);

  readonly gameCount = computed<number>(() => this.games().length);
  readonly pending = computed<boolean>(() => this.isLoading());
  readonly shouldShowEmptyState = computed<boolean>(
    () => this.gameCount() === 0 && !this.isLoading(),
  );
  readonly shouldShowEndMessage = computed<boolean>(
    () => !this.hasMore() && this.gameCount() > 0,
  );

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const search = params['game-search']
        ? decodeURIComponent(params['game-search'])
        : undefined;
      this.searchQuery.set(search);
      this.currentPage.set(1);
      this.games.set([]);
    });

    if (!this.searchQuery()) {
      this.resetGames();
    }
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  // Sort & Order
  onSortOptionChange(option: SortOption): void {
    const index = this.SORT_OPTIONS.findIndex((o) => o.value === option.value);
    if (index !== -1 && index !== this.sortIndex()) {
      this.sortIndex.set(index);
      this.resetGames();
    }
  }

  onSortResults(order: 'asc' | 'desc'): void {
    if (order !== this.sortOrder()) {
      this.sortOrder.set(order);
      this.resetGames();
    }
  }

  private resetGames(): void {
    this.currentPage.set(1);
    this.games.set([]);
    this.hasMore.set(true);

    this.fetchGames();
  }

  // Fetch the next page of games if needed -

  private fetchGames(): void {
    if (this.isLoading() || !this.hasMore()) {
      return;
    }

    this.isLoading.set(true);

    const search = this.searchQuery()?.trim();

    this.http.getGames(this.sortParam(), this.currentPage(), search).subscribe({
      next: (result) => {
        const newGames: Game[] = result.results ?? [];
        this.games.set([...this.games(), ...newGames]);

        const totalLoaded = this.games().length;
        const totalAvailable = result.count ?? 0;
        this.hasMore.set(totalLoaded < totalAvailable);

        // Increment page
        this.currentPage.set(this.currentPage() + 1);

        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.hasMore.set(false);
      },
    });
  }

  private buildSortParam(): string {
    const sortValue = this.selectedSortOption().value;
    const order = this.sortOrder();

    return order === 'asc'
      ? sortValue.startsWith('-')
        ? sortValue.substring(1)
        : sortValue
      : sortValue.startsWith('-')
        ? sortValue
        : `-${sortValue}`;
  }

  // Navigation
  goToItem(item: Game): void {
    if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
      globalThis.localStorage.setItem('game', JSON.stringify(item));
    }
    void this.router.navigate(['detail'], { state: { game: item } });
  }

  convertPlatformNametoLowercase(name?: string): string {
    return name?.toLowerCase() ?? '';
  }

  // Infinite Scroll
  private setupIntersectionObserver(): void {
    if (
      typeof IntersectionObserver === 'undefined' ||
      !this.scrollTrigger?.nativeElement
    )
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && this.hasMore() && !this.isLoading()) {
          this.fetchGames();
        }
      },
      { threshold: 0.1, rootMargin: '100px' },
    );

    observer.observe(this.scrollTrigger.nativeElement);
  }
}
