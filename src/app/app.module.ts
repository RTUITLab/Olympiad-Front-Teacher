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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardService } from './services/AuthGuard/auth-guard.service';
import { TaskCheckPageComponent } from './task-check-page/task-check-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { TaskCheckLogType1Component } from './task-check-log-type1/task-check-log-type1.component';
import { TaskCheckLogType2Component } from './task-check-log-type2/task-check-log-type2.component';
import { TaskCheckCommentComponent } from './task-check-comment/task-check-comment.component';
import { CourseService } from './services/Course/course.service';
import { GroupService } from './services/Group/group.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ApiInterceptor } from './api.intercepter';
import { forwardRef } from '@angular/core';
import { Provider } from '@angular/core';
import { JoinGroupComponent } from './join-group/join-group.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

const appRoutes: Routes = [
  { path: 'teach', component: CourseTilesPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/course/:id', component: GroupTilesPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/group/:id', component: GroupOverviewPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/group-check', component: GroupCheckPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/add-task', component: AddTaskPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/add-group', component: AddGroupPageComponent, canActivate: [AuthGuardService]},
  { path: 'teach/join-group/:id', component: JoinGroupComponent, canActivate: [AuthGuardService]}
  { path: 'teach/task-check', component: TaskCheckPageComponent, canActivate: [AuthGuardService]}
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
    AddGroupPageComponent,
    JoinGroupComponent
    TaskCheckLogType1Component,
    TaskCheckLogType2Component,
    TaskCheckCommentComponent
    TaskCheckPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    MarkdownModule.forRoot(),
  ],
  providers: [
    UserStateService,
    AuthGuardService,
    CourseService,
    GroupService,
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
