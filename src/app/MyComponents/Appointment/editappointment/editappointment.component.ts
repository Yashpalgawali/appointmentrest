import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Appointment } from 'src/app/Models/Appointment';
import { Employee } from 'src/app/Models/Employee';
import { AdminappointmentsService } from 'src/app/Services/adminappointments.service';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent {
  selectedDate !: Date;
  selectedTime: any;

  time: Date = new Date();

  public datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'DD/MM/YYYY',
    minDate: new Date(), // Set the minimum date to today
  };

  constructor(private appointserv : AppointmentService,
    private adminappoint : AdminappointmentsService,
    private empserv : EmployeeService,
    private route : ActivatedRoute,
    private router : Router) {
     
    }

  appoint  : Appointment = new Appointment();
  employee : Employee = new Employee();
  emplist : any
  emp : any  
  eid : any
  apdate : Date = new Date()
ngOnInit(): void {
  this.eid = this.route.snapshot.params['id'];
  this.adminappoint.getAppointmentById(this.eid).subscribe(data=>
                                                {
                                                  this.appoint=data
                                                  this.apdate = new Date(this.appoint.apdate)
                                                });
  
  // this.appointserv.getAppointmentById(this.eid).subscribe(data=>this.appoint=data);
  this.empserv.getAllEmployees().subscribe(data=>this.emplist=data);
}

onSubmit() {
 
  this.adminappoint.updateAppointment(this.appoint).subscribe(data=>this.router.navigate(['viewappointments']))
}

getdeptbyempid(eid : any) {
  this.empserv.getEmployeeById(eid.target.value).subscribe(data=>this.employee=data);
}
}
