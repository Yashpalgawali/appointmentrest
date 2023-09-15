import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.css']
})
export class ViewdepartmentComponent {

  constructor(private deptserv : DepartmentService,private router : Router ) {}

  deptlist : any;
  ngOnInit(): void {
    this.deptserv.getAllDepartments().subscribe(data=>this.deptlist=data);
  }

  getDeptById(did : number)
  {
    this.router.navigate(['editdeptbyid',did]);
  }
}
