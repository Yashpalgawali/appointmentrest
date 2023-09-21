import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  public login(username:string , pass : string)
  {
    const headers = new HttpHeaders({Authorization : 'Basic '+btoa(username+":"+pass)});
   return this.http.get("http://localhost:5457/users/forgotpass",{headers ,responseType : 'text' as 'json'});
  }


  /*public getUsers(username:string , pass : string)
  {
    const headers = new HttpHeaders({Authorization : 'Basic '+btoa(username+":"+pass)});
    this.http.get("",{headers ,responseType : 'text' as 'json'});
  }*/
}
