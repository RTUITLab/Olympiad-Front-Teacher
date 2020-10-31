import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-tiles-tile',
  templateUrl: './course-tiles-tile.component.html',
  styleUrls: ['./course-tiles-tile.component.css']
})
export class CourseTilesTileComponent implements OnInit {

  constructor() { }

  @Input() colorVariant : number;

  ngOnInit(): void {
     
     
  }

}
