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
        pagingType : 'full_numbers',
        responsive : true
    }
    this.compserv.getAllCompanies().subscribe(data=>{
                                                      this.complist=data 
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
                                                       // initiate our data table
                                                       this.dtTrigger.next(null)
                                                    });
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getCompById(cid : any)
  {
    this.router.navigate(['editcompbyid',cid]);
  }
}
