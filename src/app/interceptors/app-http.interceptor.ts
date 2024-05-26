import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { AuthService } from "../services/auth.service";

@Injectable()
export class appHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes("/auth/login")) {
      let newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.accessToken}`
        }
      });
      return next.handle(newRequest).pipe(
        catchError(error => {
          if (error.status == 401) {
            // Token expired, log the user out
            this.authService.logout();
          }
          return throwError(error);
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
