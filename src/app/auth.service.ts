import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {}
  userData:object={};


  saveUserData(){
    //token local && decode
    let encodedToken =
    localStorage.setItem("user",JSON.stringify(this.userData));

  }

  signUp(userData : object):Observable<any> {
    return this._HttpClient.post('http:api link',userData)
  }


  signIn(userData : object):Observable<any> {
    return this._HttpClient.post('http:api link',userData)
  }

}
