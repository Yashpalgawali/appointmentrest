import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcompanyComponent } from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { FormsModule } from '@angular/forms';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentComponent } from './MyComponents/Department/viewdepartment/viewdepartment.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';
import { AdddesignationComponent } from './MyComponents/Designation/adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';
import { AddemployeeComponent } from './MyComponents/Employee/addemployee/addemployee.component';
import { ViewemployeeComponent } from './MyComponents/Employee/viewemployee/viewemployee.component';
import { EditemployeeComponent } from './MyComponents/Employee/editemployee/editemployee.component';
import { BookappointmentComponent } from './MyComponents/Appointment/bookappointment/bookappointment.component';
import { ViewappointmentsComponent } from './MyComponents/Appointment/viewappointments/viewappointments.component';
import { EditappointmentComponent } from './MyComponents/Appointment/editappointment/editappointment.component';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { LoginService } from './Services/login.service';
import { AdminhomeComponent } from './MyComponents/Admin/adminhome/adminhome.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchappointmentComponent } from './MyComponents/Appointment/searchappointment/searchappointment.component';
import { HttpInterceptorBasicAuthService } from './Services/http/http-interceptor-basic-auth.service';
import { LogoutComponent } from './MyComponents/Login/logout/logout.component';
import { HomeComponent } from './MyComponents/home/home.component';

import { ConfirmOtpComponent } from './MyComponents/confirm-otp/confirm-otp.component';
import { ForgotPasswordComponent } from './MyComponents/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';
import { ConfirmOtpForgotPassComponent } from './MyComponents/confirm-otp-forgot-pass/confirm-otp-forgot-pass.component';
import { UpdatePasswordComponent } from './MyComponents/update-password/update-password.component';

import {DataTablesModule} from 'angular-datatables';

// Import ngx-bootstrap modules
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { ActivityLogsComponent } from './MyComponents/activity-logs/activity-logs.component'; 




@NgModule({
  declarations: [
    AppComponent,
    AddcompanyComponent,
    ViewcompanyComponent,
    EditcompanyComponent,
    AdddepartmentComponent,
    ViewdepartmentComponent,
    EditdepartmentComponent,
    AdddesignationComponent,
    ViewdesignationComponent,
    EditdesignationComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    EditemployeeComponent,
    BookappointmentComponent,
    ViewappointmentsComponent,
    EditappointmentComponent,
    LoginComponent,
    AdminhomeComponent,
    SearchappointmentComponent,
    LogoutComponent,
    HomeComponent,
    ConfirmOtpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ConfirmOtpForgotPassComponent,
    UpdatePasswordComponent,
    ActivityLogsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule  ,
    BsDatepickerModule.forRoot(), // Add this line
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    TabsModule.forRoot()
  ],
  
  providers: [LoginService,Location, 
              {provide: LocationStrategy, useClass: HashLocationStrategy}, 
              {provide : HTTP_INTERCEPTORS, useClass : HttpInterceptorBasicAuthService , multi : true},
             DatePipe
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
