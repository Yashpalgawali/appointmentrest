import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
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
                                                        .subscribe({
                                                        complete:()=>
                                                        {
                                                          this.reserr=""
                                                          this.userserv.generateOtp(this.user.user_email).subscribe(data=>
                                                            {
                                                              sessionStorage.setItem('otp',`${data}`)
                                                              sessionStorage.setItem('user_email',this.user.user_email)
                                                              sessionStorage.setItem('response',`${data}`+'OTP sent to your Email '+this.user.user_email)
                                                              this.router.navigate(['confirmotpforgotpass'])
                                                            })
                                                        },error:()=>{
                                                            this.reserr="No User found for given Email"
                                                        }
                                                      })
   
                      
                    }
}
