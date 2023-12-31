import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  emplist : any;
  dtOptions : DataTables.Settings={}
  dtTrigger : Subject<any> = new Subject<any>

  response : any
  reserr : any
  constructor( private empserv :EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers',
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
    this.empserv.getAllEmployees().subscribe(data=>{ 
                                                    this.emplist=data 
                                                    this.dtTrigger.next(null)
                                                   }
                                            );
  }

  getEmpById(eid : any)
  {
    this.router.navigate(['edit/employee/',eid]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }
}
