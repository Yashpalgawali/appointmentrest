import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/Models/Designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit{

  designation : Designation = new Designation();
  
  constructor(private desigserv : DesignationService,private route : Router){ }

  ngOnInit(): void {
   
  }
  onSubmit()
  {
    this.desigserv.saveDesignation(this.designation).subscribe({
      complete:()=>{
        sessionStorage.setItem('response',this.designation.desig_name+' is saved successfully')
        this.route.navigate(['designation'])
      },
      error:(e)=>{
        sessionStorage.setItem('reserr',this.designation.desig_name+' is not saved ')
        this.route.navigate(['designation'])
      }
    });
  }


}
