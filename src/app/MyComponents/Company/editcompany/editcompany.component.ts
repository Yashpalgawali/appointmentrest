import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/Models/Company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent {

  constructor(private compserv:CompanyService,private router : Router,private route: ActivatedRoute){ }

  comp_id !: string;
  company : Company = new Company();
  ngOnInit(): void {
    
    this.comp_id = this.route.snapshot.params['id'];
    this.compserv.getCompanyById(this.comp_id).subscribe(data=>this.company=data);
  }
  onSubmit() {
    this.compserv.updateCompany(this.company).subscribe({
      complete : ()=>{
        sessionStorage.setItem('response', this.company.comp_name+' is updated successfully')
        this.router.navigate(['viewcompany'])
      },
      error:(e)=>{
        sessionStorage.setItem('reserr', this.company.comp_name+' is not updated')
      this.router.navigate(['viewcompany'])
      }
    });
  }
}
