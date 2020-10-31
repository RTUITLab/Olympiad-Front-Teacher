import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { CourseService } from '../services/Course/course.service';

@Component({
  selector: 'app-course-tiles-page',
  templateUrl: './course-tiles-page.component.html',
  styleUrls: ['./course-tiles-page.component.css']
})
export class CourseTilesPageComponent implements OnInit {
  courses?: Array<Course>;

  constructor(private courseServise: CourseService) { }

  ngOnInit(): void {
    this.courseServise.getCoursesList().then(courses => {
      this.courses = courses;
    })
  }
}
