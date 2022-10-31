import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { tap, shareReplay, catchError } from 'rxjs/operators';

import jwt_decode from "jwt-decode"
import * as moment from 'moment';
import { User } from '../models/User';


@Injectable()
export class AuthService {

  private apiRoot = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  private getUserData(authResult){
    const token = authResult.user.tokens.access
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.apiRoot.concat('user/me'),{headers:headers}).subscribe(data=> console.log(data))
  }

  private setSession(authResult) {
    const token = authResult.user.tokens.access;
    const payload = <JWTPayload> jwt_decode(token);
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', authResult.user.tokens.refresh);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string) {
    console.log(email + password)
    return this.http.post(
      this.apiRoot.concat('login/'),
      { user:{email, password} }
    ).pipe(
      tap(response => {
        this.getUserData(response)
        this.setSession(response)
      }),
      shareReplay(),
    );
  }

  signUp(user: User): Observable<any> {
    let api = this.apiRoot.concat('register/')
    return this.http.post(api, {user:user})
        .pipe(tap(response => this.login(user.email,user.password)),
        shareReplay());
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post(
        this.apiRoot.concat('token/refresh/'),
        { refresh: this.token }
      ).pipe(
        tap(response => console.log(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'JWT '.concat(token))
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.authService.refreshToken();

      return true;
    } else {
      this.authService.logout();
      this.router.navigate(['login']);

      return false;
    }
  }
}

interface JWTPayload {
  user_id: number;
  username: string;
  email: string;
  exp: number;
}

