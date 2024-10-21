import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponent';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { BasicAuthenticationServiceService } from './basic-authentication-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient,private basicauthserv : BasicAuthenticationServiceService,private router : Router) { }

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"users/";
  response : any
  reserr : any

  public login(username:string , pass : string)
  {
    return this.basicauthserv.executeAuthenticationService(username,pass).subscribe({
      next:(data) => {
        this.router.navigate(['adminhome'])
      },
      error:(err)=> {
        sessionStorage.setItem('reserr','Username or password did not matched ')
        this.router.navigate(['adminhome'])    
      },
    })
  }

}