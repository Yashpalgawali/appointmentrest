import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalComponent } from '../GlobalComponent';
import { Users } from '../Models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"user/";

  constructor(private http : HttpClient) { }

  updatePassword(user : Users):Observable<Users>
  {alert('inside pass service '+user.cnf_pass+'\n ID = '+user.user_id)
   return  this.http.put<Users>(`${this.base_url}changepassword`,user)
  }
}
