import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = environment.token;
    //console.log('intercept', token);
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Token ' + token),
        // params: request.params.set('organization', org.toString())
      });
      //console.log('request', request);
    }
    return next.handle(request);
  }
}
