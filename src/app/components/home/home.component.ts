import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { APIResponse, Game } from 'src/app/models/app-filter/app-filter';
import { HttpService } from '../../services/http.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule,
    SearchbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<boolean> = new Subject();
  sortBy: any;
  pending: boolean = false;
  maxSize = 5;
  sortOrder: string = 'desc';
  sortOptions: any = [
    {
      name: 'Name',
      value: 'name',
    },
    { name: 'Released', value: '-released' },
    { name: 'Added', value: '-added' },
    { name: 'Created', value: '-created' },
    { name: 'Updated', value: '-updated' },
    { name: 'Rating', value: '-rating' },
    { name: 'Metacritic', value: 'metacritic' },
  ];
  games: Array<Game> = [];
  noImg: string =
    'https://res.cloudinary.com/adenike/image/upload/v1642002314/no-image_iah8ux.png';
  totalItems: number = 200;
  currentPage: number = 1;
  collection: any[] = this.games;

  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.sortBy = this.sortBy ? this.sortBy : this.sortOptions[0];
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames(
          this.sortBy.value,
          this.currentPage,
          params['game-search'],
        );
      } else {
        this.searchGames(this.sortBy.value, this.currentPage);
      }
    });
  }

  searchGames(sort: string, page: any, search?: string): void {
    console.log('sorting ', sort);
    this.pending = true;
    if (this.sortOrder == 'asc') {
      sort = /^-/.test(sort) ? sort : `-${sort}`;
    } else {
      sort = /^-/.test(sort) ? sort.substring(1) : sort;
    }

    this.http
      .getGames(sort, this.currentPage, search)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res: APIResponse<Game>) => {
          this.games = res.results;
          this.totalItems = Math.ceil(
            (res.count ?? 200) / (res.results.length || 1),
          );
          this.currentPage = page;
          this.pending = false;
          console.log(this.sortOrder, sort);
        },
        error: (error) => {
          this.pending = false;
          console.log(error);
        },
      });
  }

  goToItem(item: Game) {
    localStorage.setItem('game', JSON.stringify(item));
    this.router.navigateByUrl('detail');
  }

  convertPlatformNametoLowercase(name: string | undefined): string {
    return !name ? '' : name.toLowerCase();
  }

  nextPage(page: number) {
    this.currentPage = page;
    this.ngOnInit();
  }

  onSortResults(order: string) {
    this.sortOrder = order;
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}
