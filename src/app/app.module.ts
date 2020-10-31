import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseTilesPageComponent } from './course-tiles-page/course-tiles-page.component';
import { GeneralHeaderComponent } from './general-header/general-header.component';
import { GeneralTopbarComponent } from './general-topbar/general-topbar.component';
import { CourseTilesTileComponent } from './course-tiles-tile/course-tiles-tile.component';
import { UserStateService } from './services/User/user-state.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/AuthGuard/auth-guard.service';

const appRoutes: Routes = [
  { path: 'teach', component: CourseTilesPageComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  declarations: [
    AppComponent,
    CourseTilesPageComponent,
    GeneralHeaderComponent,
    GeneralTopbarComponent,
    CourseTilesTileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserStateService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
