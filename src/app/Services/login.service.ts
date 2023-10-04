import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponent';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"users/login/";

  public login(username:string , pass : string)
  {
    const headers = new HttpHeaders({Authorization : 'Basic '+btoa(username+":"+pass)});
    
    return this.http.get(`${this.base_url}`,{ headers , responseType : 'text' as 'json' });
  }


}