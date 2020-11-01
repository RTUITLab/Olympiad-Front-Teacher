import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-check-log-type1',
  templateUrl: './task-check-log-type1.component.html',
  styleUrls: ['./task-check-log-type1.component.css']
})
export class TaskCheckLogType1Component implements OnInit {

  constructor() { }

  @Input() failedTest : number;
  @Input() inputData : string;
  @Input() expectedAnswer : string;
  @Input() receivedAnswer : string;


  ngOnInit(): void {
  }

}
