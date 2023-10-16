import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponent';
import { AuthenticationBean } from '../Models/AuthenticationBean';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"users/";

  public login(username:string , pass : string)
  {
      let basicAuthHeaderString = this.createBasicAuthenticationHeader(username,pass)

      let header = new HttpHeaders({
          Authorization : basicAuthHeaderString
      })
    //  return this.http.get(`${this.base_url}basicauth`, {headers : header ,});
    return this.http.get(`${this.base_url}basicauth`);
  }

  createBasicAuthenticationHeader(username:string,password:string) {


    let basicHeaderString = 'Basic '+window.btoa(username+':'+password)

    return basicHeaderString ;
  }

  registerSuccessLogin(uname:string,pass:string)
  {
   
  }
}