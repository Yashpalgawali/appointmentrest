import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Models/Login';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv : LoginService) { }
  login : Login = new Login();
  
  ngOnInit(): void {
    
  }

  onSubmit()  {
    
    let resp = this.loginserv.login(this.login.username,this.login.password)
      
    resp.subscribe(data=>{
      console.log(data)

    })

  }
}
