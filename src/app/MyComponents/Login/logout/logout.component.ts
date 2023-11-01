import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationServiceService } from 'src/app/Services/basic-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private basicauthserv : BasicAuthenticationServiceService) { }

  ngOnInit(): void {
      this.basicauthserv.logout();
  }

}
