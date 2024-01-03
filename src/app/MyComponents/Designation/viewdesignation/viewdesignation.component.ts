import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-viewdesignation',
  templateUrl: './viewdesignation.component.html',
  styleUrls: ['./viewdesignation.component.css']
})
export class ViewdesignationComponent {

  constructor(private desigserv : DesignationService,private router : Router) { }
  desiglist : any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  response : any
  reserr : any

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
    this.desigserv.getAllDesignations().subscribe(data=>{
                                                          this.desiglist=data
                                                          this.dtTrigger.next(null)
                                                        });
  }
  getDesigById(did : any)
  {
    this.router.navigate(['edit/designation/',did]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
