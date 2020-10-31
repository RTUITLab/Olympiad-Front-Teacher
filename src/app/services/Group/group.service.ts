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

  public getGroupsList(): Promise<Array<Group>> {
    return new Promise((resolve, reject) => {
      let a = new Array<Group>();
      a.push({
        id: '123456',
        title: 'qwert',
        size: '12'
      })
      a.push({
        id: '435',
        title: 'dgfh',
        size: '8'
      })
      a.push({
        id: '756',
        title: 'nh',
        size: '24'
      })
      a.push({
        id: '345',
        title: 'jh',
        size: '4'
      })
      resolve(a);
    })
    //return this.http.get<Array<Group>>(Api.getGroupsList(id), this.usersState.authOptions).toPromise();
  }
}
