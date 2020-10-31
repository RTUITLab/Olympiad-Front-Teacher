import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../services/Course/course.service';

@Component({
  selector: 'app-course-tiles-tile',
  templateUrl: './course-tiles-tile.component.html',
  styleUrls: ['./course-tiles-tile.component.css']
})
export class CourseTilesTileComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  @Input() colorVariant : number;

  ngOnInit(): void {
    
  }

}
