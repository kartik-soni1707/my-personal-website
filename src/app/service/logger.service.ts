import { HttpInterceptorFn, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request URL:', req.url);

  return next(req).pipe(
    tap({
      next: event => console.log('Response:', event),
      error: err => console.error('Error:', err)
    })
  );
};
