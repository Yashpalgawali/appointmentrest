import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponent';
import { Appointment } from '../Models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"adminappointment/";
  constructor(private http: HttpClient) { }

  public getAllAppointments()
  {
    return this.http.get<Appointment[]>(`${this.base_url}`);
  }

  public getAppointmentById(apid : any)
  {
    return this.http.get<Appointment>(`${this.base_url}${apid}`);
  }

  public saveAppointment(appoint : Appointment)
  {
    return this.http.post<Appointment>(`${this.base_url}`,appoint);
  }

  public getAppointmentCounts()
  {
    return this.http.get<Appointment[]>(`${this.base_url}getcounts`);
  }
}
