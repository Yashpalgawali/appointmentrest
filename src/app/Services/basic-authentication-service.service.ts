import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { GlobalComponent } from '../GlobalComponent';
import { map } from 'rxjs';
import { error } from 'jquery';

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
    let basicAuthHeaderString = 'Basic ' + btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: `${basicAuthHeaderString}`
      })
     
     //sessionStorage.setItem('token',basicAuthHeaderString)
     return this.http.get<AuthenticationBean>(`${this.base_url}basicauth`,{ headers : headers }).pipe(
                    map(
                      data=>{
                              sessionStorage.setItem('token',basicAuthHeaderString);
                              sessionStorage.setItem('authenticatedUser',username);
                              localStorage.setItem('authenticatedUser',username);
                              localStorage.setItem('token',basicAuthHeaderString);
                              return data;
                        }
                    ));
  }

  getAuthenticatedUser() {
    if( sessionStorage.getItem('authenticatedUser'))
    { 
       return sessionStorage.getItem('authenticatedUser') 
    }
    if( localStorage.getItem('authenticatedUser'))
    {
        sessionStorage.setItem('authenticatedUser', `${localStorage.getItem('authenticatedUser')}`)
        sessionStorage.setItem('token',`${localStorage.getItem('token')}`)
        return localStorage.getItem('authenticatedUser')
    }
    else 
      return
  }

  getAuthenticatedToken() {
    
    if(this.getAuthenticatedUser())
    { 
      if(sessionStorage.getItem('token') )
      {  return sessionStorage.getItem('token') }
      else
       {
        sessionStorage.setItem('authenticatedUser', `${localStorage.getItem('authenticatedUser')}`)
        sessionStorage.setItem('token',`${localStorage.getItem('token')}`)
        return localStorage.getItem('token')
       }
    }
    else
      return
  }

  isUserLoggedIn() {
    if(sessionStorage.getItem('token'))
    {
      let user = sessionStorage.getItem('token')
      return !(user === null)
    }
    if(localStorage.getItem('token'))
    {
      let user = localStorage.getItem('token')
      return !(user === null)
    }
      else return
  }

  logout() {
    return this.http.post(`${this.app_url}logouturl`, {}).subscribe({
      next : (data) =>{
       
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('token')
      
        localStorage.removeItem('authenticatedUser');
        localStorage.removeItem('token');
        
      },
      error: (err) => {
        console.error('Logout failed', err);
        alert('Logout failed: ' + err.message);
      }
  })
    
  }
}
