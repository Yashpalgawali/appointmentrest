import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'jquery';
import { Department } from 'src/app/Models/Department';
import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent {

  constructor(private deptserv : DepartmentService, private route : ActivatedRoute,private router : Router,private compserv : CompanyService) {}

  did : any;
  clist : any;
  department : Department = new Department();
  ngOnInit(): void {
    this.did = this.route.snapshot.params['id'];
    this.deptserv.getDepartmentById(this.did).subscribe(data=>this.department=data);
    this.compserv.getAllCompanies().subscribe(data=>this.clist=data);

  }

  public onSubmit() {
    this.deptserv.saveDepartment(this.department).subscribe({
          error:(e)=>{
            sessionStorage.setItem('reserr',this.department.dept_name+' is not updated ')
            this.router.navigate(['viewdepartment'])
          },
          complete:()=>{
            sessionStorage.setItem('response',this.department.dept_name+' is updated successfully')
            this.router.navigate(['viewdepartment'])
          }
    })
  }
  public goToViewDepartments()
  {
    this.router.navigate(['viewdepartment']);
  } 
  
}
