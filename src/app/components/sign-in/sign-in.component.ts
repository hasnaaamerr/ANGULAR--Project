import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/components/services/auth.service';
import { Router} from "@angular/router";
import {faSpinner}from "@fortawesome/free-solid-svg-icons"
import { icon } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),


  }
  )
  get GetEmail() {
    return this.signInForm.controls['email']
  }
  get GetPassword() {
    return this.signInForm.controls['password']
  }
  faSpinner= faSpinner;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  errorMessage: string = '';
  isLoading: boolean = false;

  submitsignInForm(signInForm: FormGroup) {
    console.log(signInForm.value);
    this.isLoading = true;
    this._AuthService.signIn(signInForm.value).subscribe({
      next: (response) => {
        //console.log(response);
        this.isLoading = false;
        if (response.message == 'success') {
          //save token
          localStorage.setItem('userToken', response.token);
           //call and transform UserDecode
          this._AuthService.saveUserData();
          // navigate to login page
          this._Router.navigate(['/'])
        } else {
          //console.log(response);
          this.errorMessage = response.description;
        }
      },
      error:(err:any) => {
        console.log(err);
      }
    });
  }

}
