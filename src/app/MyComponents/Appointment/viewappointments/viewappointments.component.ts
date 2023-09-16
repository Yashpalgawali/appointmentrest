import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-viewappointments',
  templateUrl: './viewappointments.component.html',
  styleUrls: ['./viewappointments.component.css']
})
export class ViewappointmentsComponent implements OnInit {

  constructor(private appointserv: AppointmentService,private router : Router) {}
  aplist :any
  ngOnInit(): void {
        this.appointserv.getAllAppointments().subscribe(data=>this.aplist=data);
  }

  getAppointmentById(apid : any)
  {
    this.router.navigate(['editappointbyid',apid]); 
  }
}
