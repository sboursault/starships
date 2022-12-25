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

  constructor(private http: HttpClient, public router: Router) {}

  endpoint: string = 'http://localhost:4000/api';

  signIn(user: User) {
    //return this.http
    //  .post<any>(`${this.endpoint}/signin`, user)
    //  .subscribe((res: any) => {
    //    localStorage.setItem('access_token', res.token);
    //    this.getUserProfile(res._id).subscribe((res) => {
    //      this.currentUser = res;
    //      this.router.navigate(['user-profile/' + res.msg._id]);
    //    });
    //  });
  }
}
