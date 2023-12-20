import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './Services/appointment.service';
import { data } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
 
  title = 'appointmentrest';
  public static islogged: boolean 
  loggedUser !: string

  constructor() { 
    AppComponent.islogged =false
  }

  isUserLoggedIn() {
    if(sessionStorage.getItem('authenticatedUser'))
    {
      this.loggedUser = `${sessionStorage.getItem('authenticatedUser')}`
     return AppComponent.islogged = true
    }
    else {
      return  AppComponent.islogged = false
    }
  }

  ngOnInit(): void {
   
     if(sessionStorage.getItem('authenticatedUser'))
     {
      AppComponent.islogged = true
     }
     else {
      AppComponent.islogged = false
     }
  }
}
