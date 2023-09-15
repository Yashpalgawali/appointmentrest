import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { CompanyService } from 'src/app/Services/company.service';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private empserv   : EmployeeService,
              private desigserv : DesignationService,
              private compserv  : CompanyService,
              private router : Router) {}
   
      employee  : Employee =new Employee() ;
      clist     : any;
      desiglist : any;
      ngOnInit(): void {
        
        this.compserv.getAllCompanies().subscribe(data=>this.clist=data);
        this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
        
      }

      onSubmit() {
        
      }
      goToViewEmployees()
      {
        this.router.navigate(['viewemployee']);
      }
}
