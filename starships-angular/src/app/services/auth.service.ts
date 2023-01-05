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

  constructor(private http: HttpClient, public router: Router) { }

  signIn(user: User) {
    return this.http
      .post<any>(`/api/authorize`, user)
      .subscribe((res: any) => {
        this.currentUser = user.username
        localStorage.setItem('access_token', res.token);
        console.log(`welcome ${this.currentUser}`)
        //this.router.navigate(['user-profile/' + res.msg._id]);
      });
  }
}
