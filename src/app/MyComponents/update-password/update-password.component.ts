import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/Users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit{

  ngOnInit(): void {
  }

  resp : any
  constructor(private router : Router,private userserv : UserService) { }
  user : Users = new Users()

  updatePassword() {
    let cpass = this.user.cnf_pass
    if(this.user.new_pass==this.user.cnf_pass)
    {
      this.userserv.getUserByUserEmail(`${sessionStorage.getItem('user_email')}`)
                          .subscribe({
                                  complete:()=>{
                                          this.user.cnf_pass = cpass
                                          this.userserv.updatePasswordWithEmail(this.user)
                                                                                .subscribe(data=>this.router.navigate(['login']))
                                        }})
    }
    else
      alert('Passwords Are NOT Equal')
  }
}
