import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data, error, map } from 'jquery';
import { pipe } from 'rxjs';
import { Appointment } from 'src/app/Models/Appointment';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-searchappointment',
  templateUrl: './searchappointment.component.html',
  styleUrls: ['./searchappointment.component.css']
})
export class SearchappointmentComponent {

  constructor(private appointserv : AppointmentService,private router : Router) {} 

  appoint : Appointment = new Appointment();
  otp     !: String
  cnf_otp !: number
  reserr !: string
  public searchappoint()
  {
    this.appointserv.getAppointmentByEmailId(this.appoint.vis_email).subscribe(data=> { 
                                                                    this.otp=data
                                                                    alert(`${data}`)
                                                                    sessionStorage.setItem('otp',`${data}`)
                                                                    sessionStorage.setItem('vis_email',this.appoint.vis_email)
                                                                    sessionStorage.setItem('response','Otp is sent to '+this.appoint.vis_email)
                                                                    this.router.navigate(['confirmotp'])
                                                                  }
                                                                    ,error=>{
                                                                      this.reserr='No Appointment Found For given mail ID '+this.appoint.vis_email
                                                                      sessionStorage.setItem('reserr',this.reserr)
                                                                      sessionStorage.removeItem('response')
                                                                      setTimeout(()=>{
                                                                        sessionStorage.removeItem('reserr')
                                                                      }, 3000)
                                                                      
                                                                      this.router.navigate(['searchappointment'])
                                                                      
                                                                    })
  }

}