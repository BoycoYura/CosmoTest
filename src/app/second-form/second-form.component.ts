import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent{

  private querySubscription: Subscription;

  type;
  price;
  mediafileID;
  startTime;
  endTime;
  efirDuration;
  mediaOffsetStart;
  mediaOffsetEnd;

  createData = {
    "mediafileID" : this.mediafileID,
    "startTime" : this.startTime,
    "endTime" : this.endTime,
    "efirDuration" : this.efirDuration,
    "mediaOffsetStart" : this.mediaOffsetStart,
    "mediaOffsetEnd" : this.mediaOffsetEnd,
  };



  input = new Subject<string>();

  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.type = queryParam['type'];
          this.createData.mediafileID = queryParam['id'];
          this.createData.efirDuration = queryParam['duration'];
      }
    );
   }

   formValueChange(change_input_name){
    console.log(change_input_name);
      switch (change_input_name) {
        case 'startTime':
          this.createData.endTime = parseInt(this.createData.startTime)  +  parseInt(this.createData.efirDuration);
          break;
        case 'endTime':
          this.createData.efirDuration = parseInt(this.createData.endTime) - parseInt(this.createData.startTime);
          this.createData.mediaOffsetEnd = parseInt(this.createData.endTime);
          break;   
        case 'efirDuration':
          this.createData.endTime = parseInt(this.createData.startTime)  +  parseInt(this.createData.efirDuration);
          this.createData.mediaOffsetEnd = parseInt(this.createData.endTime);
          break; 
       
        case 'mediaOffsetStart':

          if(this.createData.mediaOffsetEnd != undefined){
            this.createData.efirDuration = parseInt(this.createData.mediaOffsetEnd) - parseInt(this.createData.mediaOffsetStart);
          }
          else{
            this.createData.efirDuration = parseInt(this.createData.endTime) - parseInt(this.createData.mediaOffsetStart);
          }

          this.createData.endTime = parseInt(this.createData.startTime)  +  parseInt(this.createData.efirDuration);
          break;
        case 'mediaOffsetEnd':
          this.createData.efirDuration = parseInt(this.createData.mediaOffsetEnd) - parseInt(this.createData.mediaOffsetStart);
          this.createData.endTime = parseInt(this.createData.mediaOffsetStart) + parseInt(this.createData.efirDuration);
          break;
        default:
          break;
      }
   }

   saveTask(){
     alert("Task create sucesssfull");
     console.log("Task Data:");
     console.log(this.createData);
   }

    
  }

