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
  group?: GroupCompactResponse;
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

  active () {
    return true;
  }

  find() {
    let g = this.groups
    if(!g) return [];
    return g.filter(G => {
      if (G.name)
        return G.name.indexOf(this.createGroup.get('name').value) !== -1;
      return false;

    })
  }

  choose(group: GroupCompactResponse) {
    this.group = group;

  }

  submit() {
    this.courseAPI.apiCoursesCourseIdAddgroupGroupIdPut$Json({courseId: this.courseId, groupId: this.group.id}).toPromise()
      .then(() => this.router.navigate(['/teach']));
  }
}
