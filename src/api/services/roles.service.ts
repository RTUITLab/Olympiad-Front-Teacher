/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class RolesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRolesGet
   */
  static readonly ApiRolesGetPath = '/api/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGet$Plain(params?: {

  }): Observable<null | Array<string>> {

    return this.apiRolesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<string>>) => r.body as null | Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGet$Json(params?: {

  }): Observable<null | Array<string>> {

    return this.apiRolesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<string>>) => r.body as null | Array<string>)
    );
  }

  /**
   * Path part for operation apiRolesUserIdGet
   */
  static readonly ApiRolesUserIdGetPath = '/api/roles/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdGet$Plain$Response(params: {
    userId: string;

  }): Observable<StrictHttpResponse<null | Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdGet$Plain(params: {
    userId: string;

  }): Observable<null | Array<string>> {

    return this.apiRolesUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<string>>) => r.body as null | Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdGet$Json$Response(params: {
    userId: string;

  }): Observable<StrictHttpResponse<null | Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdGet$Json(params: {
    userId: string;

  }): Observable<null | Array<string>> {

    return this.apiRolesUserIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<string>>) => r.body as null | Array<string>)
    );
  }

  /**
   * Path part for operation apiRolesUserIdRolePost
   */
  static readonly ApiRolesUserIdRolePostPath = '/api/roles/{userId}/{role}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUserIdRolePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRolePost$Plain$Response(params: {
    userId: string;
    role: null | string;

  }): Observable<StrictHttpResponse<null | string>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesUserIdRolePostPath, 'post');
    if (params) {

      rb.path('userId', params.userId, {});
      rb.path('role', params.role, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesUserIdRolePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRolePost$Plain(params: {
    userId: string;
    role: null | string;

  }): Observable<null | string> {

    return this.apiRolesUserIdRolePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<null | string>) => r.body as null | string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUserIdRolePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRolePost$Json$Response(params: {
    userId: string;
    role: null | string;

  }): Observable<StrictHttpResponse<null | string>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesUserIdRolePostPath, 'post');
    if (params) {

      rb.path('userId', params.userId, {});
      rb.path('role', params.role, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesUserIdRolePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRolePost$Json(params: {
    userId: string;
    role: null | string;

  }): Observable<null | string> {

    return this.apiRolesUserIdRolePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<null | string>) => r.body as null | string)
    );
  }

  /**
   * Path part for operation apiRolesUserIdRoleDelete
   */
  static readonly ApiRolesUserIdRoleDeletePath = '/api/roles/{userId}/{role}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUserIdRoleDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRoleDelete$Plain$Response(params: {
    userId: string;
    role: null | string;

  }): Observable<StrictHttpResponse<null | string>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesUserIdRoleDeletePath, 'delete');
    if (params) {

      rb.path('userId', params.userId, {});
      rb.path('role', params.role, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesUserIdRoleDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRoleDelete$Plain(params: {
    userId: string;
    role: null | string;

  }): Observable<null | string> {

    return this.apiRolesUserIdRoleDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<null | string>) => r.body as null | string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUserIdRoleDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRoleDelete$Json$Response(params: {
    userId: string;
    role: null | string;

  }): Observable<StrictHttpResponse<null | string>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.ApiRolesUserIdRoleDeletePath, 'delete');
    if (params) {

      rb.path('userId', params.userId, {});
      rb.path('role', params.role, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolesUserIdRoleDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesUserIdRoleDelete$Json(params: {
    userId: string;
    role: null | string;

  }): Observable<null | string> {

    return this.apiRolesUserIdRoleDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<null | string>) => r.body as null | string)
    );
  }

}
