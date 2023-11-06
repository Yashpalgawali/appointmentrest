import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Models/Appointment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  otp     !: String
  cnf_otp !: number
  reserr  !: string
  appoint  : Appointment = new Appointment();

  ngOnInit(): void {
    
  }

  changepassword() {
    
  }
}
