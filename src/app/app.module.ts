import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/http.service';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [AppComponent, SearchbarComponent, HomeComponent, GameDetailComponent, SliderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
