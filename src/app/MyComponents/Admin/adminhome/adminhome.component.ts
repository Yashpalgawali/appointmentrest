import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { AdminappointmentsService } from 'src/app/Services/adminappointments.service';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{

  apcount : any;
  tot_count !: number ;
  decline_count !: number ;
  pending_count !: number ;
  confirmed_count !: number ;
  response : any
  reserr   : any
  constructor(private appointserv : AdminappointmentsService) { 
   
  }
   
  ngOnInit(): void {
    this.appointserv.getAppointmentCounts().subscribe(data=> {
      this.apcount=data
      
      if(sessionStorage.getItem('response')!=null)
      {
        this.response=sessionStorage.getItem('response')
        setTimeout(() => {
          sessionStorage.removeItem('response')
          this.response=""
        }, 5000);
      }
      })
  }
}
