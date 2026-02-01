import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  standalone: false,
})
export class GameDetailComponent implements OnInit {
  game = JSON.parse(localStorage.getItem('game'));
  selectedImage: string | null = null;

  constructor() {
    console.log('game ', this.game);
  }

  ngOnInit(): void {}

  openImagePreview(image: string): void {
    this.selectedImage = image;
  }

  closeImagePreview(): void {
    this.selectedImage = null;
  }
}
