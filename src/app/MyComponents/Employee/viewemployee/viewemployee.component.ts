import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  emplist : any;
  constructor( private empserv :EmployeeService,private router : Router) {}
  ngOnInit(): void {
    this.empserv.getAllEmployees().subscribe(data=>this.emplist=data);
  }

  getEmpById(eid : any)
  {
    this.router.navigate(['editempbyid',eid]);
  }
}
