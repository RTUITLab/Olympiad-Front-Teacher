/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SolutionCheckResponse } from '../models/solution-check-response';
import { SolutionDumpView } from '../models/solution-dump-view';
import { SolutionResponse } from '../models/solution-response';
import { SolutionsStatisticResponse } from '../models/solutions-statistic-response';

@Injectable({
  providedIn: 'root',
})
export class CheckService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCheckLanguageExerciseIdPost
   */
  static readonly ApiCheckLanguageExerciseIdPostPath = '/api/Check/{language}/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckLanguageExerciseIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCheckLanguageExerciseIdPost$Response(params: {
    language: null | string;
    exerciseId: string;
      body?: { 'file'?: Blob }
  }): Observable<StrictHttpResponse<SolutionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckLanguageExerciseIdPostPath, 'post');
    if (params) {

      rb.path('language', params.language, {});
      rb.path('exerciseId', params.exerciseId, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SolutionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckLanguageExerciseIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCheckLanguageExerciseIdPost(params: {
    language: null | string;
    exerciseId: string;
      body?: { 'file'?: Blob }
  }): Observable<SolutionResponse> {

    return this.apiCheckLanguageExerciseIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<SolutionResponse>) => r.body as SolutionResponse)
    );
  }

  /**
   * Path part for operation apiCheckLanguageExerciseIdAuthorIdPost
   */
  static readonly ApiCheckLanguageExerciseIdAuthorIdPostPath = '/api/Check/{language}/{exerciseId}/{authorId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckLanguageExerciseIdAuthorIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCheckLanguageExerciseIdAuthorIdPost$Response(params: {
    language: null | string;
    exerciseId: string;
    authorId: string;
      body?: { 'file'?: Blob }
  }): Observable<StrictHttpResponse<SolutionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckLanguageExerciseIdAuthorIdPostPath, 'post');
    if (params) {

      rb.path('language', params.language, {});
      rb.path('exerciseId', params.exerciseId, {});
      rb.path('authorId', params.authorId, {});

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SolutionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckLanguageExerciseIdAuthorIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCheckLanguageExerciseIdAuthorIdPost(params: {
    language: null | string;
    exerciseId: string;
    authorId: string;
      body?: { 'file'?: Blob }
  }): Observable<SolutionResponse> {

    return this.apiCheckLanguageExerciseIdAuthorIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<SolutionResponse>) => r.body as SolutionResponse)
    );
  }

  /**
   * Path part for operation apiCheckRecheckExerciseIdAdminPanelPost
   */
  static readonly ApiCheckRecheckExerciseIdAdminPanelPostPath = '/api/Check/recheck/{exerciseId}/adminPanel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckRecheckExerciseIdAdminPanelPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRecheckExerciseIdAdminPanelPost$Response(params: {
    exerciseId: string;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckRecheckExerciseIdAdminPanelPostPath, 'post');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckRecheckExerciseIdAdminPanelPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRecheckExerciseIdAdminPanelPost(params: {
    exerciseId: string;

  }): Observable<number> {

    return this.apiCheckRecheckExerciseIdAdminPanelPost$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiCheckRecheckExerciseIdPost
   */
  static readonly ApiCheckRecheckExerciseIdPostPath = '/api/Check/recheck/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckRecheckExerciseIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRecheckExerciseIdPost$Response(params: {
    exerciseId: string;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckRecheckExerciseIdPostPath, 'post');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckRecheckExerciseIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRecheckExerciseIdPost(params: {
    exerciseId: string;

  }): Observable<number> {

    return this.apiCheckRecheckExerciseIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiCheckRechecksolutionSolutionIdPost
   */
  static readonly ApiCheckRechecksolutionSolutionIdPostPath = '/api/Check/rechecksolution/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckRechecksolutionSolutionIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRechecksolutionSolutionIdPost$Response(params: {
    solutionId: string;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckRechecksolutionSolutionIdPostPath, 'post');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckRechecksolutionSolutionIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRechecksolutionSolutionIdPost(params: {
    solutionId: string;

  }): Observable<number> {

    return this.apiCheckRechecksolutionSolutionIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiCheckRecheckusersolutionStudentIdPost
   */
  static readonly ApiCheckRecheckusersolutionStudentIdPostPath = '/api/Check/recheckusersolution/{studentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckRecheckusersolutionStudentIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRecheckusersolutionStudentIdPost$Response(params: {
    studentId: null | string;

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckRecheckusersolutionStudentIdPostPath, 'post');
    if (params) {

      rb.path('studentId', params.studentId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckRecheckusersolutionStudentIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRecheckusersolutionStudentIdPost(params: {
    studentId: null | string;

  }): Observable<number> {

    return this.apiCheckRecheckusersolutionStudentIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiCheckGet
   */
  static readonly ApiCheckGetPath = '/api/Check';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckGet$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<SolutionResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<SolutionResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckGet(params?: {

  }): Observable<null | Array<SolutionResponse>> {

    return this.apiCheckGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<SolutionResponse>>) => r.body as null | Array<SolutionResponse>)
    );
  }

  /**
   * Path part for operation apiCheckForExerciseGet
   */
  static readonly ApiCheckForExerciseGetPath = '/api/Check/forExercise';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckForExerciseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckForExerciseGet$Response(params?: {
    exerciseId?: string;

  }): Observable<StrictHttpResponse<null | Array<SolutionResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckForExerciseGetPath, 'get');
    if (params) {

      rb.query('exerciseId', params.exerciseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<SolutionResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckForExerciseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckForExerciseGet(params?: {
    exerciseId?: string;

  }): Observable<null | Array<SolutionResponse>> {

    return this.apiCheckForExerciseGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<SolutionResponse>>) => r.body as null | Array<SolutionResponse>)
    );
  }

  /**
   * Path part for operation apiCheckSolutionIdGet
   */
  static readonly ApiCheckSolutionIdGetPath = '/api/Check/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckSolutionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckSolutionIdGet$Response(params: {
    solutionId: string;

  }): Observable<StrictHttpResponse<SolutionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckSolutionIdGetPath, 'get');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SolutionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckSolutionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckSolutionIdGet(params: {
    solutionId: string;

  }): Observable<SolutionResponse> {

    return this.apiCheckSolutionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SolutionResponse>) => r.body as SolutionResponse)
    );
  }

  /**
   * Path part for operation apiCheckStatisticGet
   */
  static readonly ApiCheckStatisticGetPath = '/api/Check/statistic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckStatisticGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckStatisticGet$Response(params?: {

  }): Observable<StrictHttpResponse<null | Array<SolutionsStatisticResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckStatisticGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<SolutionsStatisticResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckStatisticGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckStatisticGet(params?: {

  }): Observable<null | Array<SolutionsStatisticResponse>> {

    return this.apiCheckStatisticGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<SolutionsStatisticResponse>>) => r.body as null | Array<SolutionsStatisticResponse>)
    );
  }

  /**
   * Path part for operation apiCheckSolutionListExerciseIdStudentIdGet
   */
  static readonly ApiCheckSolutionListExerciseIdStudentIdGetPath = '/api/Check/solutionList/{exerciseId}/{studentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckSolutionListExerciseIdStudentIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckSolutionListExerciseIdStudentIdGet$Response(params: {
    exerciseId: string;
    studentId: null | string;

  }): Observable<StrictHttpResponse<null | Array<SolutionDumpView>>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckSolutionListExerciseIdStudentIdGetPath, 'get');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});
      rb.path('studentId', params.studentId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<SolutionDumpView>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckSolutionListExerciseIdStudentIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckSolutionListExerciseIdStudentIdGet(params: {
    exerciseId: string;
    studentId: null | string;

  }): Observable<null | Array<SolutionDumpView>> {

    return this.apiCheckSolutionListExerciseIdStudentIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<SolutionDumpView>>) => r.body as null | Array<SolutionDumpView>)
    );
  }

  /**
   * Path part for operation apiCheckDownloadSolutionIdGet
   */
  static readonly ApiCheckDownloadSolutionIdGetPath = '/api/Check/download/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckDownloadSolutionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckDownloadSolutionIdGet$Response(params: {
    solutionId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckDownloadSolutionIdGetPath, 'get');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

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
   * To access the full response (for headers, for example), `apiCheckDownloadSolutionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckDownloadSolutionIdGet(params: {
    solutionId: string;

  }): Observable<void> {

    return this.apiCheckDownloadSolutionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCheckBuildLogsSolutionIdGet
   */
  static readonly ApiCheckBuildLogsSolutionIdGetPath = '/api/Check/buildLogs/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckBuildLogsSolutionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckBuildLogsSolutionIdGet$Response(params: {
    solutionId: string;

  }): Observable<StrictHttpResponse<null | string>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckBuildLogsSolutionIdGetPath, 'get');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

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
   * To access the full response (for headers, for example), `apiCheckBuildLogsSolutionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckBuildLogsSolutionIdGet(params: {
    solutionId: string;

  }): Observable<null | string> {

    return this.apiCheckBuildLogsSolutionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | string>) => r.body as null | string)
    );
  }

  /**
   * Path part for operation apiCheckRunLogsSolutionIdGet
   */
  static readonly ApiCheckRunLogsSolutionIdGetPath = '/api/Check/runLogs/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckRunLogsSolutionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRunLogsSolutionIdGet$Response(params: {
    solutionId: string;

  }): Observable<StrictHttpResponse<null | Array<SolutionCheckResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckRunLogsSolutionIdGetPath, 'get');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<SolutionCheckResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckRunLogsSolutionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckRunLogsSolutionIdGet(params: {
    solutionId: string;

  }): Observable<null | Array<SolutionCheckResponse>> {

    return this.apiCheckRunLogsSolutionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<SolutionCheckResponse>>) => r.body as null | Array<SolutionCheckResponse>)
    );
  }

  /**
   * Path part for operation apiCheckLogsSolutionIdGet
   */
  static readonly ApiCheckLogsSolutionIdGetPath = '/api/Check/logs/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckLogsSolutionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckLogsSolutionIdGet$Response(params: {
    solutionId: string;

  }): Observable<StrictHttpResponse<null | Array<SolutionCheckResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CheckService.ApiCheckLogsSolutionIdGetPath, 'get');
    if (params) {

      rb.path('solutionId', params.solutionId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<SolutionCheckResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCheckLogsSolutionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckLogsSolutionIdGet(params: {
    solutionId: string;

  }): Observable<null | Array<SolutionCheckResponse>> {

    return this.apiCheckLogsSolutionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<SolutionCheckResponse>>) => r.body as null | Array<SolutionCheckResponse>)
    );
  }

}
