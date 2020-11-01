import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserStateService } from '../User/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private usersState: UserStateService) { }

  canActivate(): boolean {
    const token = localStorage.getItem('userToken') || environment.token;

    if (this.usersState.currentUser || token) {
      this.usersState.getMe(token)
        .subscribe(success => {
          if (!success) {
            window.location.href = environment.redirectUrl;
            console.log("REDIRECT FROM GUARD");
          }
        });
      return true;
    }

    window.location.href = environment.redirectUrl;
    return false
  }
}
