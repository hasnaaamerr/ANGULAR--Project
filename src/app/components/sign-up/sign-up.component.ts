import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signupForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Age: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    ComfirmPassword: new FormControl('', Validators.required)
  }
  )

  get GetName() {
    return this.signupForm.controls['Name']
  }
  get GetAge() {
    return this.signupForm.controls['Age']
  }
  get GetEmail() {
    return this.signupForm.controls['Email']
  }
  get GetPasswoed() {
    return this.signupForm.controls['Password']
  }
  get GetComfirmPassword() {
    return this.signupForm.controls['ComfirmPassword']
  }
}
