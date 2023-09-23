import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv : LoginService,private router : Router) { }
  login : Login = new Login();
  
  ngOnInit(): void {
    
  }

  onSubmit()  {
    
    let resp = this.loginserv.login(this.login.username,this.login.password).subscribe(data=>this.gotToAppComponents())
  }
  gotToAppComponents()
  {
    this.router.navigate(['']);
  }
}
