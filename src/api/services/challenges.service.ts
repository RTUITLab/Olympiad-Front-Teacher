/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ChallengeCreateEditRequest } from '../models/challenge-create-edit-request';
import { ChallengeResponse } from '../models/challenge-response';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiChallengesGet
   */
  static readonly ApiChallengesGetPath = '/api/challenges';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChallengesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChallengesGet$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<ChallengeResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ChallengesService.ApiChallengesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<ChallengeResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiChallengesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChallengesGet(params?: {

  }): Observable<null | Array<ChallengeResponse>> {

    return this.apiChallengesGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<ChallengeResponse>>) => r.body as null | Array<ChallengeResponse>)
    );
  }

  /**
   * Path part for operation apiChallengesPost
   */
  static readonly ApiChallengesPostPath = '/api/challenges';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChallengesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChallengesPost$Response(params?: {
      body?: ChallengeCreateEditRequest
  }): Observable<StrictHttpResponse<ChallengeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ChallengesService.ApiChallengesPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChallengeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiChallengesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChallengesPost(params?: {
      body?: ChallengeCreateEditRequest
  }): Observable<ChallengeResponse> {

    return this.apiChallengesPost$Response(params).pipe(
      map((r: StrictHttpResponse<ChallengeResponse>) => r.body as ChallengeResponse)
    );
  }

  /**
   * Path part for operation apiChallengesIdGet
   */
  static readonly ApiChallengesIdGetPath = '/api/challenges/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChallengesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChallengesIdGet$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<ChallengeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ChallengesService.ApiChallengesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChallengeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiChallengesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChallengesIdGet(params: {
    id: string;

  }): Observable<ChallengeResponse> {

    return this.apiChallengesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ChallengeResponse>) => r.body as ChallengeResponse)
    );
  }

  /**
   * Path part for operation apiChallengesIdPut
   */
  static readonly ApiChallengesIdPutPath = '/api/challenges/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChallengesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChallengesIdPut$Response(params: {
    id: string;
      body?: ChallengeCreateEditRequest
  }): Observable<StrictHttpResponse<ChallengeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ChallengesService.ApiChallengesIdPutPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChallengeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiChallengesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChallengesIdPut(params: {
    id: string;
      body?: ChallengeCreateEditRequest
  }): Observable<ChallengeResponse> {

    return this.apiChallengesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<ChallengeResponse>) => r.body as ChallengeResponse)
    );
  }

  /**
   * Path part for operation apiChallengesIdDelete
   */
  static readonly ApiChallengesIdDeletePath = '/api/challenges/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChallengesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChallengesIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChallengesService.ApiChallengesIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

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
   * To access the full response (for headers, for example), `apiChallengesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChallengesIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.apiChallengesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
