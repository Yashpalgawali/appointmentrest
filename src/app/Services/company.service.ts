import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../Models/Company';
import { GlobalComponent } from '../GlobalComponent';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"company/";
  
  constructor(private http: HttpClient ) { }

  public saveCompany(company : Company):Observable<Company>
  {
   // const headers = new HttpHeaders({Authorization : 'Basic '+btoa("admin"+":"+"admin")});
    return this.http.post<Company>(`${this.base_url}`,company  );
  }

  createBasicAuthenticationHeader() {

    let username = 'admin'
    let password = 'admin'
    let basicHeaderString = 'Basic '+window.btoa(username+':'+password)

    return basicHeaderString ;
  }

  public getAllCompanies():Observable<Company[]>
  {
    let basicAuthHeaderString = this.createBasicAuthenticationHeader()

    let header = new HttpHeaders({
        Authorization : basicAuthHeaderString
    })
    return this.http.get<Company[]>(`${this.base_url}`,{headers : header});
  }

  public getCompanyById(cid :any):Observable<Company>
  {
    return this.http.get<Company>(`${this.base_url}${cid}`);
  }

  public updateCompany(company : Company)
  {
    return this.http.put<Company[]>(`${this.base_url}`,company);
  }

}
