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
    return this.http.get<Course>(Api.getCourse(id), this.usersState.authOptions).toPromise();
  }
}
