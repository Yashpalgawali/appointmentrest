import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Appointment } from 'src/app/Models/Appointment';
import { Employee } from 'src/app/Models/Employee';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  constructor(private appointserv : AppointmentService,
              private empserv : EmployeeService,
              private router : Router) {
               
              }
  appoint  : Appointment = new Appointment();
  employee : Employee = new Employee();
  emplist : any
  emp : any  
  ngOnInit(): void {
      this.empserv.getAllEmployees().subscribe(data=>this.emplist=data)
      
  }

  onSubmit() {
    this.appointserv.saveAppointment(this.appoint).subscribe(data=>{ 
                                                            sessionStorage.setItem('vis_email',this.appoint.vis_email)
                                                            sessionStorage.setItem('reswait','Appointment is booked. Waiting for the Confirmation');
                                                            this.goToViewAppointments() });
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
