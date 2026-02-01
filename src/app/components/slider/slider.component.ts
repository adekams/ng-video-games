import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    standalone: false
})
export class SliderComponent implements OnInit {
  @Input() images: Array<any>;
  constructor() {
    setTimeout(() => {
      console.log('passsed ', this.images)
    }, 5000);
  }

  ngOnInit(): void {
  }

}
