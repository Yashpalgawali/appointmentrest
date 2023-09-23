import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponent';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  app_url = GlobalComponent.base_url;

  base_url = this.app_url+"employee/"
  constructor(private http : HttpClient) { }

  public saveEmployee(emp : Employee):Observable<Employee[]>
  {
    return this.http.post<Employee[]>(`${this.base_url}`,emp);
  }
  public getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.base_url}`);
  }

  public getEmployeeById(eid :any):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.base_url}${eid}`);
  }
  public updateEmployee(emp : Employee):Observable<Employee[]>
  {
    return this.http.put<Employee[]>(`${this.base_url}`,emp);
  }
}
