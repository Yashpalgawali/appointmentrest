import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-viewdesignation',
  templateUrl: './viewdesignation.component.html',
  styleUrls: ['./viewdesignation.component.css']
})
export class ViewdesignationComponent {

  constructor(private desigserv : DesignationService,private router : Router) { }
  desiglist : any;
  ngOnInit(): void {
    this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
  }
  getDesigById(did : any)
  {
    this.router.navigate(['editdesigbyid',did]);
  }
}
