import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupCompactResponse, GroupResponse } from 'src/api/models';
import { CoursesService, GroupsService } from 'src/api/services';
import { Group } from '../models/Group';
import { CourseService } from '../services/Course/course.service';
import { GroupService } from '../services/Group/group.service';

@Component({
  selector: 'app-group-tiles-page',
  templateUrl: './group-tiles-page.component.html',
  styleUrls: ['./group-tiles-page.component.css']
})
export class GroupTilesPageComponent implements OnInit {
  public groups?: Array<GroupResponse>;

  constructor(
    private route: ActivatedRoute,
    private groupAPI: GroupsService,
    private courseAPI: CoursesService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const course = await this.courseAPI.apiCoursesCourseIdGet$Json({ courseId: id }).toPromise();
    course.groups.forEach((gr, i, arr) => {
      this.groupAPI.apiGroupsGroupIdFullGet$Json({groupId: gr.id}).toPromise().then((g) => this.groups.push(g))
    })
  }

}
