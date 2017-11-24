import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../common/services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor (private injector: Injector) {
  }

  intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // We inject the AuthenticationService manually instead of dependency injection
    // to avoid this issue: Cyclic dependency error with HttpInterceptor
    // https://github.com/angular/angular/issues/18224

    const auth = this.injector.get(AuthenticationService);
    const token = auth.user && auth.user.api_token ? auth.user.api_token : '';

    request = request.clone({
      setHeaders: {
        'Api-Token': token,
        // TODO: Replace following line with an actual Base64 | JWT-based token
        'Authorization': `User ${token}`,
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    return next.handle(request);
  }

}
