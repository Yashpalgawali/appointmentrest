import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'jquery';
import { Designation } from 'src/app/Models/Designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-editdesignation',
  templateUrl: './editdesignation.component.html',
  styleUrls: ['./editdesignation.component.css']
})
export class EditdesignationComponent implements OnInit {
  
  constructor(private desigserv:DesignationService,private route :ActivatedRoute,private router : Router) {}
  did : any;
  //designation !: Designation;
  designation : Designation = new Designation();
  ngOnInit(): void {
    this.did=this.route.snapshot.params['id'];
    this.desigserv.getDesignationById(this.did).subscribe(data=>this.designation=data);
  }

  onSubmit()
  {
    this.desigserv.updateDesignation(this.designation).subscribe(data=>{
      sessionStorage.setItem('response', this.designation.desig_name+' is updated Successfully')
      this.router.navigate(['viewdesignation'])
    },
    error=>{
      sessionStorage.setItem('reserr', this.designation.desig_name+' is not updated')
      this.router.navigate(['viewdesignation'])
    });
  }
  goToViewDesignations()
  {
    this.router.navigate(['viewdesignation']);
  }
}
