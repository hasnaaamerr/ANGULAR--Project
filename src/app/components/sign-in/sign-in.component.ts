import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router} from "@angular/router";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),

  }
  )
  get GetEmail() {
    return this.signInForm.controls['Email']
  }
  get GetPassword() {
    return this.signInForm.controls['Password']
  }


  constructor(private _AuthService: AuthService, private _Router: Router) {}

  errorMessage: string = '';
  isLoading: boolean = false;

  submitsignInForm(signInForm: FormGroup) {
    console.log(signInForm.value);
    this.isLoading = true;
    this._AuthService.signIn(signInForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.message == 'success') {
          //save token
          localStorage.setItem('userToken', response.token);
          localStorage.setItem('userRole', response.role);
           //call and transform UserDecode
           this._AuthService.saveUserData();
          // navigate to login page
          this._Router.navigate(['/home']);
        } else {
          this.errorMessage = response.description;
        }
      },
    });
  }

}
