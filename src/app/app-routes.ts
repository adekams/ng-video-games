import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

export const routes: Routes = [
  { path: 'search/:game-search', component: HomeComponent },
  {
    path: '',
    redirectTo: 'all-games',
    pathMatch: 'full',
  },
  {
    path: 'all-games',
    component: HomeComponent,
  },
  {
    path: 'detail',
    component: GameDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'all-games',
  },
];
