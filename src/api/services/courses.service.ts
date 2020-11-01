/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CourseCompactResponse } from '../models/course-compact-response';
import { CourseCreateRequest } from '../models/course-create-request';
import { CourseResponse } from '../models/course-response';

@Injectable({
  providedIn: 'root',
})
export class CoursesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCoursesGet
   */
  static readonly ApiCoursesGetPath = '/api/Courses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<CourseCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<CourseCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Plain(params?: {

  }): Observable<null | Array<CourseCompactResponse>> {

    return this.apiCoursesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<CourseCompactResponse>>) => r.body as null | Array<CourseCompactResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<CourseCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<CourseCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Json(params?: {

  }): Observable<null | Array<CourseCompactResponse>> {

    return this.apiCoursesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<CourseCompactResponse>>) => r.body as null | Array<CourseCompactResponse>)
    );
  }

  /**
   * Path part for operation apiCoursesPost
   */
  static readonly ApiCoursesPostPath = '/api/Courses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoursesPost$Plain$Response(params?: {
      body?: CourseCreateRequest
  }): Observable<StrictHttpResponse<CourseCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoursesPost$Plain(params?: {
      body?: CourseCreateRequest
  }): Observable<CourseCompactResponse> {

    return this.apiCoursesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CourseCompactResponse>) => r.body as CourseCompactResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoursesPost$Json$Response(params?: {
      body?: CourseCreateRequest
  }): Observable<StrictHttpResponse<CourseCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoursesPost$Json(params?: {
      body?: CourseCreateRequest
  }): Observable<CourseCompactResponse> {

    return this.apiCoursesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CourseCompactResponse>) => r.body as CourseCompactResponse)
    );
  }

  /**
   * Path part for operation apiCoursesCourseIdGet
   */
  static readonly ApiCoursesCourseIdGetPath = '/api/Courses/{courseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdGet$Plain$Response(params: {
    courseId: string;

  }): Observable<StrictHttpResponse<CourseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdGetPath, 'get');
    if (params) {

      rb.path('courseId', params.courseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdGet$Plain(params: {
    courseId: string;

  }): Observable<CourseResponse> {

    return this.apiCoursesCourseIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CourseResponse>) => r.body as CourseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdGet$Json$Response(params: {
    courseId: string;

  }): Observable<StrictHttpResponse<CourseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdGetPath, 'get');
    if (params) {

      rb.path('courseId', params.courseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdGet$Json(params: {
    courseId: string;

  }): Observable<CourseResponse> {

    return this.apiCoursesCourseIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CourseResponse>) => r.body as CourseResponse)
    );
  }

  /**
   * Path part for operation apiCoursesCourseIdDelete
   */
  static readonly ApiCoursesCourseIdDeletePath = '/api/Courses/{courseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdDelete$Plain$Response(params: {
    courseId: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdDeletePath, 'delete');
    if (params) {

      rb.path('courseId', params.courseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdDelete$Plain(params: {
    courseId: string;

  }): Observable<string> {

    return this.apiCoursesCourseIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdDelete$Json$Response(params: {
    courseId: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdDeletePath, 'delete');
    if (params) {

      rb.path('courseId', params.courseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdDelete$Json(params: {
    courseId: string;

  }): Observable<string> {

    return this.apiCoursesCourseIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiCoursesCourseIdAddgroupGroupIdPut
   */
  static readonly ApiCoursesCourseIdAddgroupGroupIdPutPath = '/api/Courses/{courseId}/addgroup/{groupId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdAddgroupGroupIdPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdAddgroupGroupIdPut$Plain$Response(params: {
    courseId: string;
    groupId: string;

  }): Observable<StrictHttpResponse<CourseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdAddgroupGroupIdPutPath, 'put');
    if (params) {

      rb.path('courseId', params.courseId, {});
      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdAddgroupGroupIdPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdAddgroupGroupIdPut$Plain(params: {
    courseId: string;
    groupId: string;

  }): Observable<CourseResponse> {

    return this.apiCoursesCourseIdAddgroupGroupIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CourseResponse>) => r.body as CourseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdAddgroupGroupIdPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdAddgroupGroupIdPut$Json$Response(params: {
    courseId: string;
    groupId: string;

  }): Observable<StrictHttpResponse<CourseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdAddgroupGroupIdPutPath, 'put');
    if (params) {

      rb.path('courseId', params.courseId, {});
      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdAddgroupGroupIdPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdAddgroupGroupIdPut$Json(params: {
    courseId: string;
    groupId: string;

  }): Observable<CourseResponse> {

    return this.apiCoursesCourseIdAddgroupGroupIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CourseResponse>) => r.body as CourseResponse)
    );
  }

  /**
   * Path part for operation apiCoursesCourseIdRemovegroupGroupIdPut
   */
  static readonly ApiCoursesCourseIdRemovegroupGroupIdPutPath = '/api/Courses/{courseId}/removegroup/{groupId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdRemovegroupGroupIdPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdRemovegroupGroupIdPut$Plain$Response(params: {
    courseId: string;
    groupId: string;

  }): Observable<StrictHttpResponse<CourseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdRemovegroupGroupIdPutPath, 'put');
    if (params) {

      rb.path('courseId', params.courseId, {});
      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdRemovegroupGroupIdPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdRemovegroupGroupIdPut$Plain(params: {
    courseId: string;
    groupId: string;

  }): Observable<CourseResponse> {

    return this.apiCoursesCourseIdRemovegroupGroupIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CourseResponse>) => r.body as CourseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesCourseIdRemovegroupGroupIdPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdRemovegroupGroupIdPut$Json$Response(params: {
    courseId: string;
    groupId: string;

  }): Observable<StrictHttpResponse<CourseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesCourseIdRemovegroupGroupIdPutPath, 'put');
    if (params) {

      rb.path('courseId', params.courseId, {});
      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesCourseIdRemovegroupGroupIdPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesCourseIdRemovegroupGroupIdPut$Json(params: {
    courseId: string;
    groupId: string;

  }): Observable<CourseResponse> {

    return this.apiCoursesCourseIdRemovegroupGroupIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CourseResponse>) => r.body as CourseResponse)
    );
  }

}
