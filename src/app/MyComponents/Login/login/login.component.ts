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
              private basicauthserv : BasicAuthenticationServiceService) { 
                if(sessionStorage.getItem('authenticatedUser'))
                {
                  router.navigate(['adminhome'])
                }
                else {
                  router.navigate(['login'])
                }
              }
  
  login : Login = new Login();
  errorMessage !:string
  sucessmessage !: string;
  invalidLogin = false;
  logoutsuccess !: string;
  ngOnInit(): void {
    if(sessionStorage.getItem('logoutsuccess'))
    {
      this.logoutsuccess="Logged Out Successfully"
      sessionStorage.setItem('logoutsuccess','')
    }
  }

  onSubmit()  {
    
    this.basicauthserv.executeAuthenticationService(this.login.username,this.login.password)
                                                          .subscribe(
                                                            data=>{
                                                                this.router.navigate(['adminhome'])
                                                                this.invalidLogin=false
                                                            },
                                                            error=> {
                                                                this.errorMessage = "Invalid Credentials";
                                                                this.logoutsuccess = "";
                                                                this.router.navigate(['login'])
                                                                this.invalidLogin=true
                                                            });
  }

  gotToAppComponents() { 
    this.router.navigate(['adminhome']);
  }

  forgotpassword()
  {
    this.router.navigate(['forgotpassword'])
  }
}