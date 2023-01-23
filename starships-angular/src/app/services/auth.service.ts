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
        // console.log(body)
        localStorage.setItem('access_token', body.token)
        this.user$.next(user)
        this.router.navigate(['home'])
      },
      error: (error: HttpErrorResponse) => {
        this.logout()
      },
    });
  }

  onUserChanged(): Observable<User | null> {
    return this.user$.asObservable()
  }

  getLoggedUser(): User | null {
    return this.user$.getValue()
  }

  isLoggedIn(): boolean {
    return this.user$.getValue() != null
  }

  logout(): void {
    localStorage.removeItem('access_token')
    this.user$.next(null)
    console.info('User logged out')
    this.router.navigate(['sign-in'])
  }
}
