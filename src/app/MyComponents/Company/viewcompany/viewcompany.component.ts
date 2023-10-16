import { AfterViewInit, Component,OnInit } from '@angular/core';

import { Route, Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';
import DataTable from 'datatables.net';
declare const $: any;

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent implements OnInit, AfterViewInit {

  complist : any;
  comp_id  : any; 

  response : any;
  reserr   : any;
  constructor(private compserv : CompanyService, private router : Router ) { }
  ngAfterViewInit(): void {
    $('#comptable').DataTable();
  }
   
  ngOnInit(): void {
    this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
    
  }

  getCompById(cid : any)
  {
    this.router.navigate(['editcompbyid',cid]);
  }
}
