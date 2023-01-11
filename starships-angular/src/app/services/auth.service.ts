import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/user'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new Subject<string>()
  // some people name observables and subjects with a trailing $.
  // see also : new BehaviorSubject<string>('')

  constructor(private http: HttpClient, public router: Router) { }

  signIn(user: User) {
    return this.http
      .post<any>(`/api/authorize`, user)
      .subscribe({
        next: (body: any) => {
          localStorage.setItem('access_token', body.token);
          this.user$.next(user.username)
          //this.router.navigate(['user-profile/' + res.msg._id]);
        },
        error: (error : HttpErrorResponse) => {
          localStorage.removeItem('access_token');
          this.user$.next('')
        }
      })
  }

  onUserChanged(): Observable<any> {
    return this.user$.asObservable()
  }
}
