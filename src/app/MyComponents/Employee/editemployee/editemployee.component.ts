import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { CompanyService } from 'src/app/Services/company.service';
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
    private router : Router,
    private route : ActivatedRoute) {}

employee  : Employee =new Employee() ;
clist     : any;
desiglist : any;
eid : any;

ngOnInit(): void {
  this.eid = this.route.snapshot.params['id'];

  this.compserv.getAllCompanies().subscribe(data=>this.clist=data);
  this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
this.empserv.getEmployeeById(this.eid).subscribe(data=>this.employee=data);

}

onSubmit() {

}
goToViewEmployees()
{
this.router.navigate(['viewemployee']);
}
}
