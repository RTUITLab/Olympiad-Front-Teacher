import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { GroupCompactResponse } from 'src/api/models';
import { CoursesService, GroupsService } from 'src/api/services';
import { UserStateService } from '../services/User/user-state.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {
  courseId?: string;
  groupId?: string;
  createGroup: FormGroup;
  groups: GroupCompactResponse[];

  constructor(
    private courseAPI: CoursesService,
    private groupAPI: GroupsService,
    private router: Router,
    private userService: UserStateService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.createGroup = new FormGroup({
      name: new FormControl('')
    });

    this.courseId = this.route.snapshot.paramMap.get('id');
    this.groups = await this.groupAPI.apiGroupsGet$Json().toPromise();
  }

  find(text: string) {
    return this.groups.filter(G => G.name.indexOf(text) !== -1)
  }

  submit() {
    this.courseAPI.apiCoursesCourseIdAddgroupGroupIdPut$Json({courseId: this.courseId, groupId: this.groupId}).toPromise()
      .then(() => this.router.navigate(['/teach']));
  }
}
