import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { GroupsService } from 'src/api/services';
import { UserStateService } from '../services/User/user-state.service';

@Component({
  selector: 'app-add-group-page',
  templateUrl: './add-group-page.component.html',
  styleUrls: ['./add-group-page.component.css']
})
export class AddGroupPageComponent implements OnInit {
  @Input() changeMode : boolean;
  createGroup: FormGroup;
  days = [false, false, false, false, false, false, false];

  constructor(private groupAPI: GroupsService,private router: Router, private userService: UserStateService) { }

  ngOnInit(): void {
    this.createGroup = new FormGroup({
      name: new FormControl(''),
      d1: new FormControl(''),
      d2: new FormControl(''),
      d3: new FormControl(''),
      d4: new FormControl(''),
      d5: new FormControl(''),
      d6: new FormControl(''),
      d7: new FormControl(''),
    });
  }

  disabled(day) {
    return this.days[day] === false;
  }

  toggle(day: number) {
    if (this.days[day]) {
      this.createGroup.get(`d${day + 1}`).reset();
    }
    this.days[day] = !this.days[day];
  }

  submit() {
    let lessonsTime = 
      this.createGroup.get('d1').value + '#' +
      this.createGroup.get('d2').value + '#' +
      this.createGroup.get('d3').value + '#' +
      this.createGroup.get('d4').value + '#' +
      this.createGroup.get('d5').value + '#' +
      this.createGroup.get('d6').value;
    this.groupAPI.apiGroupsPost$Json({ body: {name: this.createGroup.get('name').value, lessonsTime: lessonsTime}}).toPromise()
      .then(() => this.router.navigate(['/teach']));
  }
}
