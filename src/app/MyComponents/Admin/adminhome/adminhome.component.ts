import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{

  apcount : any;
  tot_count !: number ;
  decline_count !: number ;
  pending_count !: number ;
  confirmed_count !: number ;
  
  constructor(private appointserv : AppointmentService) { }
  
  ngOnInit(): void {
      this.apcount = this.appointserv.getAppointmentCounts().subscribe(data=>this.apcount=data);
  }
}
