import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponent';
import { Appointment } from '../Models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"appointment/";
  constructor(private http: HttpClient) { }

  public getAllAppointments()
  {
    return this.http.get<Appointment[]>(`${this.base_url}`);
  }

  public getAppointmentById(apid : any)
  {
    return this.http.get<Appointment>(`${this.base_url}${apid}`);
  }

  //This method is used in Search Appointment
  public getAppointmentByEmailId(emailid : any)
  {
    return this.http.get<String>(`${this.base_url}${emailid}`);
  }

  //This is used after the visitor books the appointment
  public getAppointmentByEmail(emailid : any)
  {
    return this.http.get<Appointment>(`${this.base_url}appointmentbymail/${emailid}`);
  }

  public saveAppointment(appoint : Appointment)
  {
    return this.http.post<Appointment>(`${this.base_url}`,appoint);
  }

  public getAppointmentCounts()
  {
    return this.http.get<Appointment[]>(`${this.base_url}getcounts`);
  }
  public updateAppointment(appoint : Appointment)
  {
    return this.http.put<Appointment[]>(`${this.base_url}`,appoint);
  }
}
