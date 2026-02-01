import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss'],
    standalone: false
})
export class SearchbarComponent implements OnInit {
  @Input() showSearch: boolean = false;
  searchForm: FormGroup;
  constructor(private _router: Router, private fb: FormBuilder) {
    this.searchForm = fb.group({
      searchQuery: ['', Validators.required],
    });

    this.searchForm.get("searchQuery").valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe((i) => {
      console.log('debouncing ', i)
      this._router.navigate(['search/', this.searchForm.value.searchQuery]);
    });
  }

  ngOnInit(): void { }
  onSubmit(form: FormGroup) {
    console.log(form.value);
    this._router.navigate(['search/', form.value.searchQuery]);
  }
}
