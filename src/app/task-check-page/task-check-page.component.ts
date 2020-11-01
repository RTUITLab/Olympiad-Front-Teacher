import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-check-page',
  templateUrl: './task-check-page.component.html',
  styleUrls: ['./task-check-page.component.css']
})
export class TaskCheckPageComponent implements OnInit {

  constructor() { }

  logOpen = false;

  solutionStrings = ["{", "    var kek: string;", "}"];

  ngOnInit(): void {
    
  }

  logToggle() {
    this.logOpen = !this.logOpen;
  }



}
