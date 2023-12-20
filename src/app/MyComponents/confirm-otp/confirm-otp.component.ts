import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmOtpService } from 'src/app/Services/confirm-otp.service';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css']
})
export class ConfirmOtpComponent  implements OnInit{

<<<<<<< HEAD
  response  !: string
  reserr    !: string
  new_otp    : any
=======
  response !: string
  reserr !: string
  new_otp : any
>>>>>>> 465f0fad9b96649a91254fee987acf19b6ff5b7c
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
<<<<<<< HEAD
      this.reserr= 'OTP Didn/\'t matched' 
=======
      this.reserr= 'OTP Didn/\'t matched'
>>>>>>> 465f0fad9b96649a91254fee987acf19b6ff5b7c
      sessionStorage.setItem('reserr','OTP Didn/\'t matched ')
      this.router.navigate(['confirmotp'])
    }
  }
}
