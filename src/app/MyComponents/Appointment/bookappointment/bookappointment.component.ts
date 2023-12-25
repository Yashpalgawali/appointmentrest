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
   ) {
      
    }
      
  selectedTime: any;

  time: Date = new Date();
    
  public datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'DD-MM-YYYY',
    minDate: new Date(), // Set the minimum date to today
  };

  
  logged_user  : any          
  appoint  : Appointment = new Appointment();
  employee : Employee = new Employee();
  emplist : any
  emp     : any  
  ngOnInit(): void {
      this.logged_user = sessionStorage.getItem('authenticatedUser')
      this.empserv.getAllEmployees().subscribe(data=>this.emplist=data)
  }

  onSubmit() {
                this.appointserv.saveAppointment(this.appoint)
                                .subscribe(data=>{ 
                                              sessionStorage.setItem('vis_email',this.appoint.vis_email)
                                              sessionStorage.setItem('reswait','Appointment is booked. Waiting for the Confirmation');
                                              this.goToViewAppointments() 
                                          });
    }
  
  goToViewAppointments()
  {
    this.router.navigate(['viewappointments']);
  }

  getdeptbyempid(eid : any) {
    //this.empserv.getEmployeeById(eid.target.value).subscribe(data=>this.employee=data);
    //this.empserv.getEmployeeByName(eid.target.value).subscribe(data=>this.employee=data);
  }
}
