import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent } from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentComponent } from './MyComponents/Department/viewdepartment/viewdepartment.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';
import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';
import { AdddesignationComponent } from './MyComponents/Designation/adddesignation/adddesignation.component';
import { ViewemployeeComponent } from './MyComponents/Employee/viewemployee/viewemployee.component';
import { AddemployeeComponent } from './MyComponents/Employee/addemployee/addemployee.component';
import { EditemployeeComponent } from './MyComponents/Employee/editemployee/editemployee.component';
import { ViewappointmentsComponent } from './MyComponents/Appointment/viewappointments/viewappointments.component';
import { BookappointmentComponent } from './MyComponents/Appointment/bookappointment/bookappointment.component';
import { EditappointmentComponent } from './MyComponents/Appointment/editappointment/editappointment.component';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './MyComponents/Admin/adminhome/adminhome.component';
import { SearchappointmentComponent } from './MyComponents/Appointment/searchappointment/searchappointment.component';
import { LogoutComponent } from './MyComponents/Login/logout/logout.component';
import { RouteGuardService } from './Services/route-guard.service';
import { HomeComponent } from './MyComponents/home/home.component';
import { ConfirmOtpComponent } from './MyComponents/confirm-otp/confirm-otp.component';
import { ForgotPasswordComponent } from './MyComponents/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';
import { ConfirmOtpForgotPassComponent } from './MyComponents/confirm-otp-forgot-pass/confirm-otp-forgot-pass.component';
import { UpdatePasswordComponent } from './MyComponents/update-password/update-password.component';
import { ActivityLogsComponent } from './MyComponents/activity-logs/activity-logs.component';

const routes: Routes = [
  { path :"addcompany" , component : AddcompanyComponent , canActivate : [RouteGuardService]},
  { path :"company" , component : ViewcompanyComponent , canActivate : [RouteGuardService]},
  { path :"edit/company/:id" , component : EditcompanyComponent , canActivate : [RouteGuardService]},
  { path :"adddepartment" , component : AdddepartmentComponent , canActivate : [RouteGuardService]},
  { path :"department" , component : ViewdepartmentComponent, canActivate : [RouteGuardService]},
  { path :"edit/department/:id" , component : EditdepartmentComponent, canActivate : [RouteGuardService]},
  { path :"adddesignation" , component : AdddesignationComponent, canActivate : [RouteGuardService]},
  { path :"designation" , component : ViewdesignationComponent, canActivate : [RouteGuardService]},
  { path :"edit/designation/:id" , component : EditdesignationComponent, canActivate : [RouteGuardService]},
  { path :"addemployee" , component : AddemployeeComponent, canActivate : [RouteGuardService]},
  { path :"employee" , component : ViewemployeeComponent, canActivate : [RouteGuardService]},
  { path :"edit/employee/:id" , component : EditemployeeComponent, canActivate : [RouteGuardService]} ,
  { path :"bookappointment" , component : BookappointmentComponent} ,
  { path :"appointments" , component : ViewappointmentsComponent},
  { path :"edit/appointment/:id" , component : EditappointmentComponent, canActivate : [RouteGuardService]} ,
  { path :"login" , component : LoginComponent },
  { path :"" , component : HomeComponent},
  { path :"logout" , component : LogoutComponent, canActivate : [RouteGuardService]},
  { path :"changepass" , component : ChangePasswordComponent},
  { path :"adminhome" , component : AdminhomeComponent, canActivate : [RouteGuardService]} ,
  { path :"searchappointment" , component : SearchappointmentComponent},
  { path :"confirmotp" , component : ConfirmOtpComponent},
  { path :"forgotpassword" , component : ForgotPasswordComponent},
  { path :"confirmotp" , component : ConfirmOtpComponent},
  { path :"confirmotpforgotpass" , component : ConfirmOtpForgotPassComponent},
  { path :"updatepassword" , component : UpdatePasswordComponent},
  { path :"activity" , component : ActivityLogsComponent , canActivate : [RouteGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
