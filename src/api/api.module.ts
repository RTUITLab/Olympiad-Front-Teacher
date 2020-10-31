/* tslint:disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountService } from './services/account.service';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { ChallengesService } from './services/challenges.service';
import { CheckService } from './services/check.service';
import { CommentService } from './services/comment.service';
import { DumpService } from './services/dump.service';
import { ExecutorService } from './services/executor.service';
import { ExerciseDataService } from './services/exercise-data.service';
import { ExercisesService } from './services/exercises.service';
import { RolesService } from './services/roles.service';
import { UserGenerateService } from './services/user-generate.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountService,
    AdminService,
    AuthService,
    ChallengesService,
    CheckService,
    CommentService,
    DumpService,
    ExecutorService,
    ExerciseDataService,
    ExercisesService,
    RolesService,
    UserGenerateService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
