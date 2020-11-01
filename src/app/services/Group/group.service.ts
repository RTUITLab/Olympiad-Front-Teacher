import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStateService } from '../User/user-state.service';
import { Group } from '../../models/Group';
import { Api } from 'src/app/api';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient, private usersState: UserStateService) { }

  public getGroupsList(id): Promise<Array<Group>> {
    return this.http.get<Array<Group>>(Api.getGroupeList(id), this.usersState.authOptions).toPromise();
  }
}
