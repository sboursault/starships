import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
    //private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {
    /*this.signinForm = this.formBuilder.group({
      login: [''],
      password: [''],
    });*/
  }

  model = new User('', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  //signIn() {
  //  this.authService.signIn(this.signinForm.value);
  //}
}
