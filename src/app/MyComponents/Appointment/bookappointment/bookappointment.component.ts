import { Component, OnInit } from '@angular/core';
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
              private empserv : EmployeeService) {}
  appoint  : Appointment = new Appointment();
  employee : Employee = new Employee();
  emplist : any
  emp : any  
  ngOnInit(): void {
    this.empserv.getAllEmployees().subscribe(data=>this.emplist=data);
  }

  onSubmit() {

  }
  getdeptbyempid(eid : any) {
    alert("emp ID  = "+eid.target.value)
    this.empserv.getEmployeeById(eid.target.value).subscribe(data=>this.employee=data);
  }
}
