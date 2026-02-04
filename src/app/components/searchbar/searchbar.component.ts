import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class SearchbarComponent implements OnInit {
  @Input() showSearch: boolean = false;
  searchForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.searchForm = fb.group({
      searchQuery: ['', Validators.required],
    });

    this.searchForm
      .get('searchQuery')
      .valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((i) => {
        this.router.navigate(['search/', this.searchForm.value.searchQuery]);
      });
  }

  ngOnInit(): void {}
  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.router.navigate(['search/', form.value.searchQuery]);
  }
}
