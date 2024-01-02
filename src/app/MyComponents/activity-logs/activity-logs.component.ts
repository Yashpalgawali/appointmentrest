import { Component } from '@angular/core';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { Activity } from 'src/app/Models/Activity';
import { ActivityService } from 'src/app/Services/activity.service';

@Component({
  selector: 'app-activity-logs',
  templateUrl: './activity-logs.component.html',
  styleUrls: ['./activity-logs.component.css']
})
export class ActivityLogsComponent {

  activity : Activity[] = []
  dtOptions : DataTables.Settings={}
  dtTrigger : Subject<any> = new Subject<any>
  constructor( private activityserv : ActivityService){ }

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers',
      responsive : true
    }
    this.activityserv.getAllActivities().subscribe(data=>{
                                                  this.activity=data
                                                  this.dtTrigger.next(null)
                                                })
  }
}
