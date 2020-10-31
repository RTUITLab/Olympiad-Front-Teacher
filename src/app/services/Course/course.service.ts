import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/api';
import { UserStateService } from '../User/user-state.service';
import { Course } from '../../models/Course'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient, private usersState: UserStateService) { }

  public getCoursesList(): Promise<Array<Course>> {
    return new Promise<Array<Course>>((resolve, reject) => {
      let a = new Array<Course>();
      a.push({
        id: '12345',
        name: 'qwer',
        groupCount: '2'
      });
      a.push({
        id: '34567',
        name: 'dfg',
        groupCount: '4'
      });
      a.push({
        id: '2345',
        name: 'fghj',
        groupCount: '3'
      });
      resolve(a)
    })
    //return this.http.get<Array<Course>>(Api.getCoursesList(), this.usersState.authOptions).toPromise();
  }
}
