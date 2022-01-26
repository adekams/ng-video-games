import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from 'src/app/models/app-filter/app-filter';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedOption: any = '';

  options: any = [
    'Name',
    'Released',
    'Added',
    'Created',
    'Updated',
    'Rating',
    'Metacritic',
  ];
  namedOptions = this.options.map((name) => ({ name }));
  games: any;
  noImg: string =
    'https://res.cloudinary.com/adenike/image/upload/v1642002314/no-image_iah8ux.png';
  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.options = this.namedOptions;
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this.http
      .getGames(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }
}
