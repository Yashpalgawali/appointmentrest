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

const routes: Routes = [
  { path :"addcompany" , component : AddcompanyComponent , canActivate : [RouteGuardService]},
  { path :"viewcompany" , component : ViewcompanyComponent , canActivate : [RouteGuardService]},
  { path :"editcompbyid/:id" , component : EditcompanyComponent , canActivate : [RouteGuardService]},
  { path :"adddepartment" , component : AdddepartmentComponent , canActivate : [RouteGuardService]},
  { path :"viewdepartment" , component : ViewdepartmentComponent, canActivate : [RouteGuardService]},
  { path :"editdeptbyid/:id" , component : EditdepartmentComponent, canActivate : [RouteGuardService]},
  { path :"adddesignation" , component : AdddesignationComponent, canActivate : [RouteGuardService]},
  { path :"viewdesignation" , component : ViewdesignationComponent, canActivate : [RouteGuardService]},
  { path :"editdesigbyid/:id" , component : EditdesignationComponent, canActivate : [RouteGuardService]},
  { path :"addemployee" , component : AddemployeeComponent, canActivate : [RouteGuardService]},
  { path :"viewemployee" , component : ViewemployeeComponent, canActivate : [RouteGuardService]},
  { path :"editempbyid/:id" , component : EditemployeeComponent, canActivate : [RouteGuardService]} ,
  { path :"bookappointment" , component : BookappointmentComponent} ,
  { path :"viewappointments" , component : ViewappointmentsComponent},
  { path :"editappointbyid/:id" , component : EditappointmentComponent, canActivate : [RouteGuardService]} ,
  { path :"login" , component : LoginComponent },
  { path :"" , component : HomeComponent},
  { path :"logout" , component : LogoutComponent, canActivate : [RouteGuardService]},
  { path :"changepass" , component : ChangePasswordComponent},
  { path :"adminhome" , component : AdminhomeComponent, canActivate : [RouteGuardService]} ,
  { path :"searchappointment" , component : SearchappointmentComponent},
  { path :"confirmotp" , component : ConfirmOtpComponent},
  { path :"forgotpassword" , component : ForgotPasswordComponent},
  { path :"confirmotp" , component : ConfirmOtpComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
