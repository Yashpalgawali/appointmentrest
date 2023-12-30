import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { Appointment } from 'src/app/Models/Appointment';
import { Users } from 'src/app/Models/Users';
import { BasicAuthenticationServiceService } from 'src/app/Services/basic-authentication-service.service';
import { PasswordService } from 'src/app/Services/password.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  new_pass !: string
  cnf_pass !: string
  reserr   !: string
  user      : Users = new Users();

  constructor(private passserv : PasswordService,private router : Router,private userserv : UserService,
              private baseauthserv : BasicAuthenticationServiceService) { }
  

  ngOnInit(): void {
    this.userserv.getUserByUserName(`${sessionStorage.getItem('authenticatedUser')}`)
                                                                      .subscribe(data=>
                                                                      {
                                                                          this.user=data
                                                                      })
  }

  changepassword() {
    if(this.user.new_pass===this.user.cnf_pass)
    {
      this.passserv.updatePassword(this.user).subscribe({
       
        error: (e) => {
          sessionStorage.setItem('reserr',' Password is not updated Successfully') 
          this.router.navigate(['changepass'])
         },
        complete: () =>{
          this.baseauthserv.executeAuthenticationService(`${sessionStorage.getItem('authenticatedUser')}`,this.user.cnf_pass)
          sessionStorage.setItem('response',' Password updated Successfully')
           
          this.router.navigate(['adminhome'])
          }
      });
  }
  }
}
