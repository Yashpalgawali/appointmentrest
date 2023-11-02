import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { GlobalComponent } from '../GlobalComponent';
import { map } from 'rxjs';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {

  constructor(private http: HttpClient) { }
  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"users/";
  
  executeAuthenticationService(username:any, password:any) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
      sessionStorage.setItem('token',basicAuthHeaderString)
      return this.http.get<AuthenticationBean>(`${this.base_url}`+'basicauth',{headers : headers}).pipe(map(data=>{
                    sessionStorage.setItem('token',basicAuthHeaderString)
                    sessionStorage.setItem('authenticatedUser',username)
      }));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
    else
      return
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')
        return !(user === null)
  }

  logout() {
    
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}
