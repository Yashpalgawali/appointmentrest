import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalComponent } from '../GlobalComponent';
import { Appointment } from '../Models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AdminappointmentsService {
  
  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"adminappointment/";
  
  constructor(private http : HttpClient) { }

  public getAppointmentCounts()
  {
    return this.http.get<Appointment[]>(`${this.base_url}getcounts`);
  }
  public getAppointmentById(apid : any)
  {
    return this.http.get<Appointment>(`${this.base_url}${apid}`);
  }

  public updateAppointment(appoint : Appointment)
  {
    return this.http.put<Appointment[]>(`${this.base_url}`,appoint);
  }

}
