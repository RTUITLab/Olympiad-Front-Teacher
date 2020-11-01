/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GroupCompactResponse } from '../models/group-compact-response';
import { GroupCreateEditRequest } from '../models/group-create-edit-request';
import { GroupResponse } from '../models/group-response';

@Injectable({
  providedIn: 'root',
})
export class GroupsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGroupsGet
   */
  static readonly ApiGroupsGetPath = '/api/Groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<GroupCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<GroupCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGet$Plain(params?: {

  }): Observable<null | Array<GroupCompactResponse>> {

    return this.apiGroupsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<GroupCompactResponse>>) => r.body as null | Array<GroupCompactResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<GroupCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<GroupCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGet$Json(params?: {

  }): Observable<null | Array<GroupCompactResponse>> {

    return this.apiGroupsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<GroupCompactResponse>>) => r.body as null | Array<GroupCompactResponse>)
    );
  }

  /**
   * Path part for operation apiGroupsPost
   */
  static readonly ApiGroupsPostPath = '/api/Groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupsPost$Plain$Response(params?: {
      body?: GroupCreateEditRequest
  }): Observable<StrictHttpResponse<GroupResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupsPost$Plain(params?: {
      body?: GroupCreateEditRequest
  }): Observable<GroupResponse> {

    return this.apiGroupsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GroupResponse>) => r.body as GroupResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupsPost$Json$Response(params?: {
      body?: GroupCreateEditRequest,
      headers?:
  }): Observable<StrictHttpResponse<GroupResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupsPost$Json(params?: {
      body?: GroupCreateEditRequest,
      headers?: any
  }): Observable<GroupResponse> {

    return this.apiGroupsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GroupResponse>) => r.body as GroupResponse)
    );
  }

  /**
   * Path part for operation apiGroupsGroupIdGet
   */
  static readonly ApiGroupsGroupIdGetPath = '/api/Groups/{groupId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGroupIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdGet$Plain$Response(params: {
    groupId: string;

  }): Observable<StrictHttpResponse<GroupCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGroupIdGetPath, 'get');
    if (params) {

      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGroupIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdGet$Plain(params: {
    groupId: string;

  }): Observable<GroupCompactResponse> {

    return this.apiGroupsGroupIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GroupCompactResponse>) => r.body as GroupCompactResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGroupIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdGet$Json$Response(params: {
    groupId: string;

  }): Observable<StrictHttpResponse<GroupCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGroupIdGetPath, 'get');
    if (params) {

      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGroupIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdGet$Json(params: {
    groupId: string;

  }): Observable<GroupCompactResponse> {

    return this.apiGroupsGroupIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GroupCompactResponse>) => r.body as GroupCompactResponse)
    );
  }

  /**
   * Path part for operation apiGroupsGroupIdFullGet
   */
  static readonly ApiGroupsGroupIdFullGetPath = '/api/Groups/{groupId}/full';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGroupIdFullGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdFullGet$Plain$Response(params: {
    groupId: string;

  }): Observable<StrictHttpResponse<GroupResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGroupIdFullGetPath, 'get');
    if (params) {

      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGroupIdFullGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdFullGet$Plain(params: {
    groupId: string;

  }): Observable<GroupResponse> {

    return this.apiGroupsGroupIdFullGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GroupResponse>) => r.body as GroupResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGroupIdFullGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdFullGet$Json$Response(params: {
    groupId: string;

  }): Observable<StrictHttpResponse<GroupResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGroupIdFullGetPath, 'get');
    if (params) {

      rb.path('groupId', params.groupId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGroupIdFullGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdFullGet$Json(params: {
    groupId: string;

  }): Observable<GroupResponse> {

    return this.apiGroupsGroupIdFullGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GroupResponse>) => r.body as GroupResponse)
    );
  }

  /**
   * Path part for operation apiGroupsIdDelete
   */
  static readonly ApiGroupsIdDeletePath = '/api/Groups/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsIdDelete$Plain$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

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
   * To access the full response (for headers, for example), `apiGroupsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsIdDelete$Plain(params: {
    id: string;

  }): Observable<string> {

    return this.apiGroupsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsIdDelete$Json$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

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
   * To access the full response (for headers, for example), `apiGroupsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsIdDelete$Json(params: {
    id: string;

  }): Observable<string> {

    return this.apiGroupsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiGroupsGroupIdJoinTokenPost
   */
  static readonly ApiGroupsGroupIdJoinTokenPostPath = '/api/Groups/{groupId}/join/{token}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGroupIdJoinTokenPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdJoinTokenPost$Plain$Response(params: {
    groupId: string;
    inviteToken?: null | string;
    token: string;

  }): Observable<StrictHttpResponse<GroupCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGroupIdJoinTokenPostPath, 'post');
    if (params) {

      rb.path('groupId', params.groupId, {});
      rb.query('inviteToken', params.inviteToken, {});
      rb.path('token', params.token, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGroupIdJoinTokenPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdJoinTokenPost$Plain(params: {
    groupId: string;
    inviteToken?: null | string;
    token: string;

  }): Observable<GroupCompactResponse> {

    return this.apiGroupsGroupIdJoinTokenPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GroupCompactResponse>) => r.body as GroupCompactResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupsGroupIdJoinTokenPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdJoinTokenPost$Json$Response(params: {
    groupId: string;
    inviteToken?: null | string;
    token: string;

  }): Observable<StrictHttpResponse<GroupCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.ApiGroupsGroupIdJoinTokenPostPath, 'post');
    if (params) {

      rb.path('groupId', params.groupId, {});
      rb.query('inviteToken', params.inviteToken, {});
      rb.path('token', params.token, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupsGroupIdJoinTokenPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupsGroupIdJoinTokenPost$Json(params: {
    groupId: string;
    inviteToken?: null | string;
    token: string;

  }): Observable<GroupCompactResponse> {

    return this.apiGroupsGroupIdJoinTokenPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GroupCompactResponse>) => r.body as GroupCompactResponse)
    );
  }

}
