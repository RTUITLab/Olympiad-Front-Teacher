import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-check-log-type2',
  templateUrl: './task-check-log-type2.component.html',
  styleUrls: ['./task-check-log-type2.component.css']
})
export class TaskCheckLogType2Component implements OnInit {

  constructor() { }

  @Input() errorLog : string;

  ngOnInit(): void {
  }

}
