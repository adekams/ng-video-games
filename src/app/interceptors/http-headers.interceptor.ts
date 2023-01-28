import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      // https://rapidapi.com/accujazz/api/rawg-video-games-database/details
      setHeaders: {
        'x-rapidapi-key': '42d813360dmsh8137b4197221fb2p19ed88jsn9b39155216ce',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      // rawg.io
      setParams: {
        key: '613215ec3d364759ada7617f5c86edf0',
      },
    });
    return next.handle(request);
  }
}
