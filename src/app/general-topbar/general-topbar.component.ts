import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../services/User/user-state.service';

@Component({
  selector: 'app-general-topbar',
  templateUrl: './general-topbar.component.html',
  styleUrls: ['./general-topbar.component.css']
})
export class GeneralTopbarComponent implements OnInit {

  constructor(private userState: UserStateService) { }

  ngOnInit(): void {
  }

}
