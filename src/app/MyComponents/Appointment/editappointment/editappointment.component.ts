import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Appointment } from 'src/app/Models/Appointment';
import { Employee } from 'src/app/Models/Employee';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent {
  constructor(private appointserv : AppointmentService,
    private empserv : EmployeeService,
    private route : ActivatedRoute,
    private router : Router) {
     
    }

  appoint  : Appointment = new Appointment();
  employee : Employee = new Employee();
  emplist : any
  emp : any  
  eid : any

ngOnInit(): void {
  this.eid = this.route.snapshot.params['id'];
  this.appointserv.getAppointmentById(this.eid).subscribe(data=>this.appoint=data);
  this.empserv.getAllEmployees().subscribe(data=>this.emplist=data);
}

onSubmit() {
  /*alert(this.appoint.employee.emp_id+""+this.appoint.employee.emp_name)
  alert(this.appoint.employee.department.dept_id+""+this.appoint.employee.department.dept_name)
  alert(this.appoint.employee.department.company.company_id+""+this.appoint.employee.department.company.comp_name)
  alert(this.appoint.employee.designation.desig_id+""+this.appoint.employee.designation.desig_name)*/
  this.appointserv.updateAppointment(this.appoint).subscribe(data=>this.router.navigate(['viewappointments']))
}

getdeptbyempid(eid : any) {
  this.empserv.getEmployeeById(eid.target.value).subscribe(data=>this.employee=data);
}
}
