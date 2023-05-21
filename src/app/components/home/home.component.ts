import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { APIResponse, Game } from 'src/app/models/app-filter/app-filter';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<boolean> = new Subject();
  sortBy: any;
  pending: boolean = false;
  sortOptions: any = [
    {
      name: 'Name',
      value: 'name',
    },
    { name: 'Released', value: '-released' },
    { name: 'Added', value: '-added' },
    { name: 'Created', value: '-created' },
    { name: 'Updated', value: '-uploaded' },
    { name: 'Rating', value: '-rating' },
    { name: 'Metacritic', value: 'metacritic' },
  ];
  // namedOptions = this.options.map((name) => ({ name }));
  games: Array<Game> = [];
  // sort: string;
  noImg: string =
    'https://res.cloudinary.com/adenike/image/upload/v1642002314/no-image_iah8ux.png';
  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.options = this.namedOptions;
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  consoleSort(item) {
    console.log(item);
  }
  searchGames(sort: string, search?: string): void {
    this.pending = true;
    this.http
      .getGames(sort, search)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (res: APIResponse<Game>) => {
          this.pending = false;
          this.games = res.results;
          console.log(sort);
        },
        (error) => {
          this.pending = false;
          console.log(error);
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}
