import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

const routes: Routes = [
  { path: 'search/:game-search', component: HomeComponent },
  {
    path: '',
    redirectTo: 'all-games',
    pathMatch: 'full',
  },
  {
    path: 'all-games',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: GameDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
