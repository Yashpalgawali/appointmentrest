import { Component,OnInit } from '@angular/core';

import { Route, Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';
import DataTable from 'datatables.net';


@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent {

  complist : any;
  comp_id : any;

   
  constructor(private compserv : CompanyService, private router : Router ) { }

  ngOnInit(): void {
   $(document).ready(function(){
      $('#comptable').DataTable({});
    })
    this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
  }

  getCompById(cid : any)
  {
    this.router.navigate(['editcompbyid',cid]);
  }
}
