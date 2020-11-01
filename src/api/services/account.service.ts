/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ChangePasswordRequest } from '../models/change-password-request';
import { RegistrationRequest } from '../models/registration-request';
import { UserInfoResponse } from '../models/user-info-response';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAccountGet
   */
  static readonly ApiAccountGetPath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Response(params?: {
    match?: null | string;

  }): Observable<StrictHttpResponse<null | Array<UserInfoResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountGetPath, 'get');
    if (params) {

      rb.query('match', params.match, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<UserInfoResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet(params?: {
    match?: null | string;

  }): Observable<null | Array<UserInfoResponse>> {

    return this.apiAccountGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<UserInfoResponse>>) => r.body as null | Array<UserInfoResponse>)
    );
  }

  /**
   * Path part for operation apiAccountPost
   */
  static readonly ApiAccountPostPath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPost$Response(params?: {
      body?: RegistrationRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPost(params?: {
      body?: RegistrationRequest
  }): Observable<void> {

    return this.apiAccountPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAccountIdTokenGet
   */
  static readonly ApiAccountIdTokenGetPath = '/api/Account/{id}/{token}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountIdTokenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountIdTokenGet$Response(params: {
    id: null | string;
    token: null | string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountIdTokenGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.path('token', params.token, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountIdTokenGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountIdTokenGet(params: {
    id: null | string;
    token: null | string;

  }): Observable<void> {

    return this.apiAccountIdTokenGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAccountIsRegisterAvailableGet
   */
  static readonly ApiAccountIsRegisterAvailableGetPath = '/api/Account/isRegisterAvailable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountIsRegisterAvailableGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountIsRegisterAvailableGet$Response(params?: {

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountIsRegisterAvailableGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountIsRegisterAvailableGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountIsRegisterAvailableGet(params?: {

  }): Observable<boolean> {

    return this.apiAccountIsRegisterAvailableGet$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiAccountDeleteUserStudentIdDelete
   */
  static readonly ApiAccountDeleteUserStudentIdDeletePath = '/api/Account/deleteUser/{studentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountDeleteUserStudentIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDeleteUserStudentIdDelete$Response(params: {
    studentId: null | string;

  }): Observable<StrictHttpResponse<null | string>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountDeleteUserStudentIdDeletePath, 'delete');
    if (params) {

      rb.path('studentId', params.studentId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountDeleteUserStudentIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDeleteUserStudentIdDelete(params: {
    studentId: null | string;

  }): Observable<null | string> {

    return this.apiAccountDeleteUserStudentIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<null | string>) => r.body as null | string)
    );
  }

  /**
   * Path part for operation apiAccountChangePasswordPost
   */
  static readonly ApiAccountChangePasswordPostPath = '/api/Account/changePassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountChangePasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountChangePasswordPost$Response(params?: {
      body?: ChangePasswordRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountChangePasswordPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountChangePasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountChangePasswordPost(params?: {
      body?: ChangePasswordRequest
  }): Observable<void> {

    return this.apiAccountChangePasswordPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
