import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBean } from 'src/app/Models/AuthenticationBean';
import { Login } from 'src/app/Models/Login';
import { BasicAuthenticationServiceService } from 'src/app/Services/basic-authentication-service.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv : LoginService,
              private router    : Router,
              private basicauthserv : BasicAuthenticationServiceService) { }
  
  login : Login = new Login();
  errorMessage = "Invalid Credentials";
  sucessmessage !: string;
  invalidLogin = false;
  ngOnInit(): void {
  }

  onSubmit()  {
    
    this.basicauthserv.executeAuthenticationService(this.login.username,this.login.password).subscribe(
                                                            data=>{
                                                                
                                                                this.router.navigate(['adminhome'])
                                                                this.invalidLogin=false
                                                            },error=> {
                                                              this.router.navigate(['login'])
                                                              this.invalidLogin=true
                                                            });
    //  this.loginserv.login(this.login.username,this.login.password)
    //               .subscribe(data =>  this.gotToAppComponents())
    //                         ,()=>{ this.router.navigate(['login']) };
  }

  gotToAppComponents() { 
    this.router.navigate(['adminhome']);
  }

}