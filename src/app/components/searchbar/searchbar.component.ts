import { CommonModule } from '@angular/common';
import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class SearchbarComponent implements OnInit {
  @Input() showSearch = false;

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  searchForm: FormGroup;
  private isSettingFromRoute = false;

  constructor() {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });

    const searchControl = this.searchForm.get('searchQuery');

    if (searchControl) {
      searchControl.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((value: string) => {
          if (this.isSettingFromRoute) return;

          const trimmed = value?.trim() ?? '';

          // Only navigate if value differs from current route param
          const currentParam =
            this.activatedRoute.snapshot.params['game-search'] ?? '';
          if (trimmed !== currentParam) {
            const route = trimmed ? ['search', trimmed] : ['/'];
            void this.router.navigate(route);
          }
        });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const searchParam = params['game-search'] ?? '';

      this.isSettingFromRoute = true;
      this.searchForm.patchValue(
        { searchQuery: searchParam },
        { emitEvent: false },
      );
      this.isSettingFromRoute = false;
    });
  }

  onSubmit(form: FormGroup) {
    const value = form.value.searchQuery?.trim() ?? '';
    const route = value ? ['search', value] : ['/'];
    void this.router.navigate(route);
  }
}
