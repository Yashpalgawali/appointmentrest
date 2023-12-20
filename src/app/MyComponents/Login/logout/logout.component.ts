import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationServiceService } from 'src/app/Services/basic-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private basicauthserv : BasicAuthenticationServiceService,private router : Router) { }
  logoutsuccess !: string

  ngOnInit(): void {
      this.basicauthserv.logout()
      this.logoutsuccess="Successfully Logged Out"
      sessionStorage.setItem('logoutsuccess',this.logoutsuccess)
      this.router.navigate(['login'])
  }

}
