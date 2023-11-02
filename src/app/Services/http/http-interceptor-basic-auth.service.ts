import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationServiceService } from '../basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor( private basicAuthenticationService : BasicAuthenticationServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
    // let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let basicAuthHeaderString =  sessionStorage.getItem('token')
    let username = this.basicAuthenticationService.getAuthenticatedUser()

      request = request.clone({
        setHeaders : {
            Authorization : `${basicAuthHeaderString}`
          }
        })
    
    return next.handle(request);
   /* let username = 'admin'
    let password = 'admin'
    let basicHeaderString = 'Basic '+window.btoa(username+':'+password)
  
    request = request.clone({
      setHeaders : {
        Authorization :  basicHeaderString
      }
    })
    return next.handle(request)*/
  }
} 
