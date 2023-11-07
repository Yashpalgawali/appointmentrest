import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Appointment } from 'src/app/Models/Appointment';
import { Users } from 'src/app/Models/Users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  otp      : any
  cnf_otp !: number
  reserr  !: string
  user     : Users = new Users();
  
  constructor(private userserv : UserService,private router : Router) { }

  ngOnInit(): void {

  }

  changepassword() {

    this.userserv.getUserByUserEmail(this.user.user_email)
                                                        .subscribe(data=>
                                                        {
                                                          this.user=data
                                                          alert(this.user.username)
                                                        })
   
                      // this.userserv.generateOtp(this.user.user_email).subscribe(data=>
                      //                                         {
                      //                                           sessionStorage.setItem('otp',`${data}`)
                      //                                           sessionStorage.setItem('user_email',this.user.user_email)
                      //                                           sessionStorage.setItem('response','OTP sent to your Email ID')
                      //                                           alert('OTP in session = '+sessionStorage.getItem('otp'))
                      //                                           this.router.navigate(['confirmotpforgotpass'])
                      //                                         })
                    }
}
