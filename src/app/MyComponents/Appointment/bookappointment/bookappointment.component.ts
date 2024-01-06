import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Appointment } from 'src/app/Models/Appointment';
import { Employee } from 'src/app/Models/Employee';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { BasicAuthenticationServiceService } from 'src/app/Services/basic-authentication-service.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import {formatDate} from '@angular/common';
import { moment } from 'ngx-bootstrap/chronos/testing/chain';

declare var $: any;


@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css'],
  
})

export class BookappointmentComponent implements OnInit {
  selectedDate : Date = new Date();
  ate : Date = new Date();

  constructor(private appointserv : AppointmentService,
    private empserv : EmployeeService,
    private router : Router,
    private basicauthserv : BasicAuthenticationServiceService,
    private datePipe : DatePipe
   ) { }
  
  time: Date = new Date();
  selectedTime !: Date;
  minTime !: Date
    
  public datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass : 'theme-dark-blue',
    dateInputFormat: 'DD-MM-YYYY',
    minDate: new Date(), // Set the minimum date to today
  };

  logged_user  : any          
  appoint  : Appointment = new Appointment();
  employee : Employee = new Employee();
  emplist : any
  emp     : any  

  ngOnInit(): void {
    this.time = new Date(); // Initialize with the current time
    this.minTime = new Date(); // Initialize with the current time

    // Disable the previous time by setting the minutes and seconds to 0
    this.minTime.setMinutes(0);
    this.minTime.setSeconds(0);
      this.logged_user = sessionStorage.getItem('authenticatedUser')
      this.empserv.getAllEmployees().subscribe(data=>this.emplist=data) 
  }

  onSubmit() {
    
    this.appoint.apdate = this.datePipe.transform(this.appoint.apdate, 'dd-MM-yyyy'); 
    this.appoint.aptime = this.datePipe.transform(this.appoint.aptime, 'hh:mm:ss a'); 
   
    this.appointserv.saveAppointment(this.appoint)
                    .subscribe(data=>{ 
                                  sessionStorage.setItem('vis_email',this.appoint.vis_email)
                                  sessionStorage.setItem('reswait','Appointment is booked. Waiting for the Confirmation');
                                  this.goToViewAppointments() 
                              });
    }
  
  goToViewAppointments()
  {
    this.router.navigate(['appointments']);
  }

  getdeptbyempid(eid : any) {
    //this.empserv.getEmployeeById(eid.target.value).subscribe(data=>this.employee=data);
    //this.empserv.getEmployeeByName(eid.target.value).subscribe(data=>this.employee=data);
  }
}
