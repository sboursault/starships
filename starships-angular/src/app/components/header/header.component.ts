import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  currentUser: string = ''
  subscription: Subscription = new Subject<any>().asObservable().subscribe();

  constructor(private authService: AuthService) {
    this.subscription = this.authService.onSignInSignOut().subscribe(
      value => this.currentUser = value
    )
  }

}
