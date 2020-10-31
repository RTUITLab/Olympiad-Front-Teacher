import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../models/Group';
import { GroupService } from '../services/Group/group.service';

@Component({
  selector: 'app-group-tiles-page',
  templateUrl: './group-tiles-page.component.html',
  styleUrls: ['./group-tiles-page.component.css']
})
export class GroupTilesPageComponent implements OnInit {
  public groups?: Array<Group>;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.groupService.getGroupsList().then((groups) => {
      this.groups = groups;
    })
  }

}
