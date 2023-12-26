import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error } from 'jquery';
import { Employee } from 'src/app/Models/Employee';
import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {
  constructor(private empserv   : EmployeeService,
    private desigserv : DesignationService,
    private compserv  : CompanyService,
    private deptserv   : DepartmentService,
    private router : Router,
    private route : ActivatedRoute) {}

employee  : Employee =new Employee() ;
clist     : any;
desiglist : any;
eid : any;
deptlist : any;
selectedDept : any;
ngOnInit(): void {
  this.eid = this.route.snapshot.params['id'];
  this.compserv.getAllCompanies().subscribe(data=>this.clist=data);
  this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
  this.empserv.getEmployeeById(this.eid).subscribe(data=>this.employee=data);
}

onSubmit() {
  this.empserv.updateEmployee(this.employee).subscribe({
            complete:()=>{
            sessionStorage.setItem('response','Employee updated successfully')
            this.router.navigate(['viewemployee'])
            
          },error:(e)=>{
            sessionStorage.setItem('reserr','Employee is not updated')
            this.router.navigate(['viewemployee'])
          }
        });
}

goToViewEmployees()
{
  this.router.navigate(['viewemployee']);
}
getdeptbycompid(cid:any) {
  this.deptserv.getDepartmentByCompName(cid.target.value).subscribe(data=>this.deptlist=data);
}

}
