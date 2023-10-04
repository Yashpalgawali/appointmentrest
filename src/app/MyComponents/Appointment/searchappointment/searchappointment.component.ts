import { Component } from '@angular/core';
import { Appointment } from 'src/app/Models/Appointment';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-searchappointment',
  templateUrl: './searchappointment.component.html',
  styleUrls: ['./searchappointment.component.css']
})
export class SearchappointmentComponent {

  constructor(private appointserv : AppointmentService) {} 

  appoint  : Appointment = new Appointment();

  public searchappoint()
  {
    this.appointserv.getAppointmentByEmailId(this.appoint.vis_email)
  }

}