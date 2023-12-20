import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationServiceService } from './basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private basicauthserv : BasicAuthenticationServiceService,private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot,state : RouterStateSnapshot) {
    if(this.basicauthserv.isUserLoggedIn())
    return true;
  else
    this.router.navigate(['login']);
    return false;
   }
  
}
