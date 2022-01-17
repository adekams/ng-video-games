import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    this.options = this.namedOptions;
  }
}
