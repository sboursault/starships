import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  model = new User(null, '', '');

  // SEE ALSO REACTIVE FORMS

  onSubmit() {
    this.authService.signIn(this.model);
  }
}
