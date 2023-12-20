import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmOtpService } from 'src/app/Services/confirm-otp.service';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css']
})
export class ConfirmOtpComponent  implements OnInit{

  response !: string
  reserr !: string
  new_otp : any
  constructor (private otpserv : ConfirmOtpService ,private router : Router) { } 
  
  ngOnInit() {
    if(sessionStorage.getItem('otp'))
    {
      this.response= `${sessionStorage.getItem('response')}`
    }
  }

  confirmotp()
  {
    if(this.new_otp==parseInt(`${sessionStorage.getItem('otp')}`)) {
      this.router.navigate(['viewappointments'])
    }
    else {
      sessionStorage.removeItem('response')
      this.reserr= 'OTP Didn/\'t matched'
      sessionStorage.setItem('reserr','OTP Didn/\'t matched ')
      this.router.navigate(['confirmotp'])
    }
  }
}
