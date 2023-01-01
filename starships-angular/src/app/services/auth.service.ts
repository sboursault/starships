import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = '';
  endpoint: string = 'http://localhost:4000/api';

  constructor(private http: HttpClient, public router: Router) { }

  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        this.currentUser = user.login
        localStorage.setItem('access_token', res.token);
        //this.router.navigate(['user-profile/' + res.msg._id]);
      });
  }
}
