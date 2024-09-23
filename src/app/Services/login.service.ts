import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponent';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { BasicAuthenticationServiceService } from './basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient,private basicauthserv : BasicAuthenticationServiceService) { }

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"users/";

  public login(username:string , pass : string)
  {
    return this.basicauthserv.executeAuthenticationService(username,pass);
  }

}