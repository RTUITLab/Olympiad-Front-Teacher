import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';
import { Api } from 'src/app/api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private usersBehavior = new BehaviorSubject<User>(undefined);
  public currentUserStream = this.usersBehavior.asObservable();
  public currentUser: User;

  constructor(private http: HttpClient) {
    var token = localStorage.getItem('userToken') || environment.token;
    if (token) {
      this.getMe(token);
    } else {
      window.location.href = environment.redirectUrl;
    }

  }

  private initUser(response: LoginResponse) {
    const user: User = {
      firstName: response.firstName,
      studentID: response.studentId,
      id: response.id,
      token: response.token,
      email: response.email,
      roles: this.parseJwt(response.token)
    };
    localStorage.setItem('userToken', response.token);
    this.usersBehavior.next(user);
    this.currentUser = user;
  }

  public getMe(token: string): Observable<boolean> {

    let observer: Subscriber<boolean>;
    const observable = new Observable<boolean>(obs => {
      observer = obs;
    });

    this.http.get<LoginResponse>(
      Api.getMe(),
      { headers: { 'Authorization': `Bearer ${token}` } }
    )
      .subscribe(
        response => {
          this.initUser(response);
          observer.next(true);
        },
        failure => {
          this.logOut();
          observer.next(false);
        }
      );
    return observable;
  }

  public get authOptions(): object {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      })
    }
  }

  public get bearer(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    })
  }

  public logOut(): void {
    localStorage.removeItem('userToken');
    this.usersBehavior.next(null);
    this.currentUser = null;

    window.location.href = environment.redirectUrl;
  }

  private parseJwt(token: string): string[] {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64))['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
}
