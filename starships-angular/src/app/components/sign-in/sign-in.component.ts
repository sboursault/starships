import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  onSubmit() {
    this.authService.signIn(this.model);
  }
}
