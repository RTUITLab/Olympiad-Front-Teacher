/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Solution } from '../models/solution';
import { SolutionCheckRequest } from '../models/solution-check-request';
import { SolutionStatus } from '../models/solution-status';

@Injectable({
  providedIn: 'root',
})
export class ExecutorService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiExecutorGet
   */
  static readonly ApiExecutorGetPath = '/api/Executor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExecutorGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExecutorGet$Response(params?: {
    solutionId?: string;

  }): Observable<StrictHttpResponse<Solution>> {

    const rb = new RequestBuilder(this.rootUrl, ExecutorService.ApiExecutorGetPath, 'get');
    if (params) {

      rb.query('solutionId', params.solutionId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Solution>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExecutorGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExecutorGet(params?: {
    solutionId?: string;

  }): Observable<Solution> {

    return this.apiExecutorGet$Response(params).pipe(
      map((r: StrictHttpResponse<Solution>) => r.body as Solution)
    );
  }

  /**
   * Path part for operation apiExecutorSolutionIdStatePost
   */
  static readonly ApiExecutorSolutionIdStatePostPath = '/api/Executor/{solutionId}/{state}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExecutorSolutionIdStatePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExecutorSolutionIdStatePost$Response(params: {
    solutionId: string;
    state: SolutionStatus;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExecutorService.ApiExecutorSolutionIdStatePostPath, 'post');
    if (params) {

      rb.path('solutionId', params.solutionId, {});
      rb.path('state', params.state, {});

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
   * To access the full response (for headers, for example), `apiExecutorSolutionIdStatePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExecutorSolutionIdStatePost(params: {
    solutionId: string;
    state: SolutionStatus;

  }): Observable<void> {

    return this.apiExecutorSolutionIdStatePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExecutorBuildlogSolutionIdPost
   */
  static readonly ApiExecutorBuildlogSolutionIdPostPath = '/api/Executor/buildlog/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExecutorBuildlogSolutionIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExecutorBuildlogSolutionIdPost$Response(params: {
    solutionId: string;
      body?: null | string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExecutorService.ApiExecutorBuildlogSolutionIdPostPath, 'post');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

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
   * To access the full response (for headers, for example), `apiExecutorBuildlogSolutionIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExecutorBuildlogSolutionIdPost(params: {
    solutionId: string;
      body?: null | string
  }): Observable<void> {

    return this.apiExecutorBuildlogSolutionIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExecutorChecklogSolutionIdPost
   */
  static readonly ApiExecutorChecklogSolutionIdPostPath = '/api/Executor/checklog/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExecutorChecklogSolutionIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExecutorChecklogSolutionIdPost$Response(params: {
    solutionId: string;
      body?: SolutionCheckRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExecutorService.ApiExecutorChecklogSolutionIdPostPath, 'post');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

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
   * To access the full response (for headers, for example), `apiExecutorChecklogSolutionIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExecutorChecklogSolutionIdPost(params: {
    solutionId: string;
      body?: SolutionCheckRequest
  }): Observable<void> {

    return this.apiExecutorChecklogSolutionIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
