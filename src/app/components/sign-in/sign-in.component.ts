import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signupForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),

  }
  )
  get GetEmail() {
    return this.signupForm.controls['Email']
  }
  get GetPasswoed() {
    return this.signupForm.controls['Password']
  }

}
