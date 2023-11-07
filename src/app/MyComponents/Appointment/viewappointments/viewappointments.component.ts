import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-viewappointments',
  templateUrl: './viewappointments.component.html',
  styleUrls: ['./viewappointments.component.css']
})
export class ViewappointmentsComponent implements OnInit {

  constructor(private appointserv: AppointmentService,private router : Router) { }
  aplist          : any
  isloggedinuser !: boolean
  reswait  !: string
  ngOnInit()      : void {
        this.isloggedinuser = false
        
        if(sessionStorage.getItem('authenticatedUser')!=null)
        {
          this.isloggedinuser=true
          this.appointserv.getAllAppointments().subscribe(data=>this.aplist=data)
        }
        else 
        {
          if(sessionStorage.getItem('vis_email')!=null)
          {
            this.appointserv.getAppointmentByEmail(sessionStorage.getItem('vis_email'))
                                                                        .subscribe(data=>
                                                                        {
                                                                            this.aplist=data 
                                                                            if(sessionStorage.getItem('reswait'))
                                                                            {
                                                                              this.reswait = `${sessionStorage.getItem('reswait')}`
                                                                              setTimeout(() => {
                                                                                sessionStorage.removeItem('reswait')
                                                                              }, 4000);
                                                                              
                                                                            }
                                                                            if(sessionStorage.getItem('authenticatedUser')!=null)
                                                                            {
                                                                              this.isloggedinuser=true
                                                                            }
                                                                        });
          }
          else {
            this.router.navigate(['searchappointment'])
          }
      }
  }

  getAppointmentById(apid : any)
  {
    this.router.navigate(['editappointbyid',apid]); 
  }
}
function $timeout(arg0: () => void, arg1: number) {
  throw new Error('Function not implemented.');
}

