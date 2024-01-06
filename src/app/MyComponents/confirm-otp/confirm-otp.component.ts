import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmOtpService } from 'src/app/Services/confirm-otp.service';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css']
})
export class ConfirmOtpComponent  implements OnInit{

  response: any    
  reserr  : any          
  new_otp : any
  constructor (private otpserv : ConfirmOtpService ,private router : Router) { } 
  
  ngOnInit() {
    if(sessionStorage.getItem('otp')&& sessionStorage.getItem('response') )
    {
      this.response= sessionStorage.getItem('response')
    }
  }

  confirmotp()
  {
    if(this.new_otp==parseInt(`${sessionStorage.getItem('otp')}`)) {
      sessionStorage.removeItem('otp')
      sessionStorage.removeItem('response')
      this.router.navigate(['appointments'])
    }
    else {
      sessionStorage.removeItem('response') 
      this.reserr= "OTP Did not matched"
      setTimeout(()=>{
        this.reserr = ""
      }, 3000)
      this.router.navigate(['confirmotp'])
    }
  }
}
