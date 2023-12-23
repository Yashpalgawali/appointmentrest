import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { Appointment } from 'src/app/Models/Appointment';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-viewappointments',
  templateUrl: './viewappointments.component.html',
  styleUrls: ['./viewappointments.component.css']
})
export class ViewappointmentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private appointserv: AppointmentService,private router : Router) { }
  aplist  :  Appointment[] = []
  todaysappoints  : Appointment[] = []
  isloggedinuser !: boolean
  reswait  : any
  response : any
  reserr   : any
  ngOnInit()      : void {
        this.isloggedinuser = false
        this.dtOptions={
          pagingType : 'full_numbers',
          // Use this attribute to enable the responsive extension
          responsive: true
        }
        if(sessionStorage.getItem('authenticatedUser')!=null)
        {
          this.isloggedinuser=true
          
          this.appointserv.getAllAppointments().subscribe(data=>{
                                                this.aplist=data 
                                                // initiate our data table
                                                 this.dtTrigger.next(null);
                                              })
          this.appointserv.getTodaysAppointments().subscribe(data=>{
                                            this.todaysappoints=data
                                            // initiate our data table
                                            this.dtTrigger.next(null);
          })  
        }
        else 
        {
          if(sessionStorage.getItem('vis_email')!=null)
          {
            if( sessionStorage.getItem('response')!=null)
            {
              setTimeout(() => {
              this.response = sessionStorage.getItem('response')
            }, 300);
            }
            if( sessionStorage.getItem('reserr')!=null)
            {
              setTimeout(() => {
              this.reserr = sessionStorage.getItem('reserr')
            }, 300);
          }
            this.appointserv.getAllAppointmentsByEmail(sessionStorage.getItem('vis_email')).subscribe(data=>{
              this.aplist=data
              // initiate our data table
              this.dtTrigger.next(null);
            })

            this.appointserv.getTodaysAppointmentsByEmail(sessionStorage.getItem('vis_email')).subscribe(data=>{
              this.todaysappoints=data
              // initiate our data table
              this.dtTrigger.next(null);
            })
          }
          else {
            this.router.navigate(['searchappointment'])
          }
      }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getAppointmentById(apid : any)
  {
    this.router.navigate(['editappointbyid',apid]);
  }
  
}
