import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  username: string = ''

  constructor(private authService: AuthService) {
    // a simple string interpolation like `{{ authService.currentUser }}` could do the job
    // but it has inconvienents:
    // - we should probably avoid to refer dependencies in the template
    // - this string interpolation won't work for more complex logic (e.g. to update a list of items).
    this.authService.onSignInSignOut().subscribe(
      value => this.username = value
    )
  }

}
