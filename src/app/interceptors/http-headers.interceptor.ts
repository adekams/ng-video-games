import { environment } from 'src/environments/environment';

import { HttpInterceptorFn } from '@angular/common/http';

export const httpHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      'x-rapidapi-key': environment.RAPIDAPI_KEY || '',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    },
    setParams: {
      key: environment.RAWG_API_KEY || '',
    },
  });
  return next(modifiedReq);
};
