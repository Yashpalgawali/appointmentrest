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
  constructor( private empserv :EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.dtOptions={
<<<<<<< HEAD
      pagingType : 'full_numbers',
      responsive : true
=======
      pagingType : 'full_numbers'
>>>>>>> 465f0fad9b96649a91254fee987acf19b6ff5b7c
    }
    this.empserv.getAllEmployees().subscribe(data=>{ 
                                                    this.emplist=data 
                                                    this.dtTrigger.next(null)
                                                   }
                                            );
  }

  getEmpById(eid : any)
  {
    this.router.navigate(['editempbyid',eid]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }
}
