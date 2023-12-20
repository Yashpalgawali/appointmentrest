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
<<<<<<< HEAD
        pagingType : 'full_numbers',
        responsive : true
=======
        pagingType : 'full_numbers'
>>>>>>> 465f0fad9b96649a91254fee987acf19b6ff5b7c
    }
    this.compserv.getAllCompanies().subscribe(data=>{
                                                      this.complist=data 
                                                       // initiate our data table
                                                       this.dtTrigger.next(null)
                                                    });
    
  }

<<<<<<< HEAD
=======
   ngAfterViewInit(): void {
  //   this.dtTrigger.next(null);
   }

>>>>>>> 465f0fad9b96649a91254fee987acf19b6ff5b7c
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getCompById(cid : any)
  {
    this.router.navigate(['editcompbyid',cid]);
  }
}
