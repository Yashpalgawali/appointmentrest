import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/Users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-confirm-otp-forgot-pass',
  templateUrl: './confirm-otp-forgot-pass.component.html',
  styleUrls: ['./confirm-otp-forgot-pass.component.css']
})
export class ConfirmOtpForgotPassComponent implements OnInit{

  user : Users = new Users();
  response !: string

  constructor(private userserv : UserService,private router : Router) { }
  
  ngOnInit(): void {
        this.user.user_email = `${sessionStorage.getItem('user_email')}`
        this.response = `${sessionStorage.getItem('response')}`
  }

  updatePassword() {
    let otp = parseInt(`${sessionStorage.getItem('otp')}`)
  
    if(this.user.cnf_otp==otp)
    {
      this.router.navigate(['updatepassword'])
    }
    
  }
}
