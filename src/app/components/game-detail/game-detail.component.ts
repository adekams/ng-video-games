import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game = JSON.parse(localStorage.getItem('game'));
  constructor() {
    console.log('game ', this.game);
  }

  ngOnInit(): void {
  }

}
