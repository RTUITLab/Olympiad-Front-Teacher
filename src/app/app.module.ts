import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseTilesPageComponent } from './course-tiles-page/course-tiles-page.component';
import { GeneralHeaderComponent } from './general-header/general-header.component';
import { GeneralTopbarComponent } from './general-topbar/general-topbar.component';
import { CourseTilesTileComponent } from './course-tiles-tile/course-tiles-tile.component';
import { GroupTilesPageComponent } from './group-tiles-page/group-tiles-page.component';
import { GroupTilesTileComponent } from './group-tiles-tile/group-tiles-tile.component';
import { GroupOverviewPageComponent } from './group-overview-page/group-overview-page.component';
import { GroupCheckPageComponent } from './group-check-page/group-check-page.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';
import { AddGroupPageComponent } from './add-group-page/add-group-page.component';
import { UserStateService } from './services/User/user-state.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/AuthGuard/auth-guard.service';

const appRoutes: Routes = [
  { path: 'teach', component: CourseTilesPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/group', component: GroupTilesPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/group-overview', component: GroupOverviewPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/group-check', component: GroupCheckPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/add-task', component: AddTaskPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/add-group', component: AddGroupPageComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseTilesPageComponent,
    GeneralHeaderComponent,
    GeneralTopbarComponent,
    CourseTilesTileComponent,
    GroupTilesPageComponent,
    GroupTilesTileComponent,
    GroupOverviewPageComponent,
    GroupCheckPageComponent,
    AddTaskPageComponent,
    AddGroupPageComponent
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
