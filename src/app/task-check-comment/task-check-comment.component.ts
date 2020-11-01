import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostComment } from 'src/api/models';

@Component({
  selector: 'app-task-check-comment',
  templateUrl: './task-check-comment.component.html',
  styleUrls: ['./task-check-comment.component.css']
})
export class TaskCheckCommentComponent implements OnInit {

  constructor() { }


  @Input() index: number;
  @Input() arr: PostComment[];

  ngOnInit(): void {
  }

}
