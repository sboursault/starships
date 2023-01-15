import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);
  // Some people name observables and subjects with a trailing $.
  // A Subject or Observable doesn't have a current value.
  // When a value is emitted, it is passed to subscribers and the Observable is done with it.
  // If you want to have a current value, use BehaviorSubject which is designed for exactly that purpose.
  // BehaviorSubject keeps the last emitted value and emits it immediately to new subscribers.

  constructor(private http: HttpClient, public router: Router) {}

  signIn(user: User) {
    return this.http.post<any>(`/api/authorize`, user).subscribe({
      next: (body: any) => {
        localStorage.setItem('access_token', body.token);
        this.user$.next(user);  // TODO replace with the user from the service
        //this.router.navigate(['user-profile/' + res.msg._id]);
      },
      error: (error: HttpErrorResponse) => {
        localStorage.removeItem('access_token');
        this.user$.next(null);
      },
    });
  }

  onUserChanged(): Observable<User | null> {
    return this.user$.asObservable();
  }

  getLoggedUser(): User | null {
    return this.user$.getValue();
  }
}
