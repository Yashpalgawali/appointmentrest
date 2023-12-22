import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.css']
})
export class ViewdepartmentComponent {

  constructor(private deptserv : DepartmentService,private router : Router ) {}

  deptlist : any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  response : any
  reserr : any
  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'simple_numbers',
      responsive : true
     
  }
  if( sessionStorage.getItem('response')!=null)
  {
      setTimeout(() => {
      this.response = sessionStorage.getItem('response')
      sessionStorage.removeItem('response')
    }, 300);
  }
  if( sessionStorage.getItem('reserr')!=null)
  {
      setTimeout(() => {
      this.reserr = sessionStorage.getItem('reserr')
      sessionStorage.removeItem('reserr')
    }, 300);
  }
    this.deptserv.getAllDepartments().subscribe(data=>{
      
            this.deptlist=data
            // initiate our data table
            this.dtTrigger.next(null);
          }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getDeptById(did : number)
  {
    this.router.navigate(['editdeptbyid',did]);
  }
}
