import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalComponent } from '../GlobalComponent';
import { Users } from '../Models/Users';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"users/";

  constructor(private http : HttpClient) { }

  getUserByUserName(uname : string):Observable<Users>
  {
    return this.http.get<Users>(`${this.base_url}${uname}`)
  }
}
