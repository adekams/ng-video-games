import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: FormGroup) {
    this._router.navigate(['search', form.value]);
  }
}
