import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/Users';

@Component({
  selector: 'app-confirm-otp-forgot-pass',
  templateUrl: './confirm-otp-forgot-pass.component.html',
  styleUrls: ['./confirm-otp-forgot-pass.component.css']
})
export class ConfirmOtpForgotPassComponent implements OnInit{

  user : Users = new Users();
  response !: string

  constructor() { }
  
  ngOnInit(): void {
        this.user.user_email = `${sessionStorage.getItem('user_email')}`
        this.response = `${sessionStorage.getItem('response')}`
  }
}
