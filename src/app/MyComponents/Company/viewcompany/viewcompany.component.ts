import { AfterViewInit, Component,OnInit,OnDestroy } from '@angular/core';

import { Route, Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';
import { Subject } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent {

  complist : any;
  comp_id  : any; 

  response : any;
  reserr   : any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private compserv : CompanyService, private router : Router ) { }

  ngOnInit(): void {
    this.dtOptions={
        pagingType : 'full_numbers'
    }
    this.compserv.getAllCompanies().subscribe(data=>{
                                                      this.complist=data 
                                                       // initiate our data table
                                                       this.dtTrigger.next(null)
                                                    });
    
  }

   ngAfterViewInit(): void {
  //   this.dtTrigger.next(null);
   }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getCompById(cid : any)
  {
    this.router.navigate(['editcompbyid',cid]);
  }
}
