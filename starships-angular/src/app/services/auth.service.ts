import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/user'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: string = '';
  private subject = new Subject<any>()

  constructor(private http: HttpClient, public router: Router) { }

  signIn(user: User) {
    return this.http
      .post<any>(`/api/authorize`, user)
      .subscribe({
        next: (body: any) => {
          this.currentUser = user.username
          localStorage.setItem('access_token', body.token);
          this.subject.next(this.currentUser)
          //this.router.navigate(['user-profile/' + res.msg._id]);
        },
        error: error => {
          this.currentUser = ''
          localStorage.removeItem('access_token');
          this.subject.next(this.currentUser)
        }
      })
  }

  onSignInSignOut(): Observable<any> {
    return this.subject.asObservable()
  }
}
