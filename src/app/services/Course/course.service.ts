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
    return this.http.get<Array<Course>>(Api.getCoursesList(), this.usersState.authOptions).toPromise();
  }

  public getCourse(id: string): Promise<Course> {
    return new Promise<Course>((resolve, reject) => {
      let a = new Array<Course>();
      a.push({
        id: '12345',
        title: 'qwer',
        groupCount: '2'
      });
      a.push({
        id: '34567',
        title: 'dfg',
        groupCount: '4'
      });
      a.push({
        id: '2345',
        title: 'fghj',
        groupCount: '3'
      });
      resolve(a.find(C => C.id === id));
    })
    //return this.http.get<Course>(Api.getCourse(id), this.usersState.authOptions).toPromise();
  }
}
