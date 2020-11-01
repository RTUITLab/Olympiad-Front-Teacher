/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CompactExerciseUserResult } from '../models/compact-exercise-user-result';
import { ExerciseCompactResponse } from '../models/exercise-compact-response';
import { ExerciseExtendedRequest } from '../models/exercise-extended-request';
import { ExerciseInfo } from '../models/exercise-info';
import { ExerciseRequest } from '../models/exercise-request';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiExercisesCompacrResultsExerciseIdGet
   */
  static readonly ApiExercisesCompacrResultsExerciseIdGetPath = '/api/exercises/compacrResults/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExercisesCompacrResultsExerciseIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExercisesCompacrResultsExerciseIdGet$Response(params: {
    exerciseId: string;

  }): Observable<StrictHttpResponse<null | Array<CompactExerciseUserResult>>> {

    const rb = new RequestBuilder(this.rootUrl, ExercisesService.ApiExercisesCompacrResultsExerciseIdGetPath, 'get');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<CompactExerciseUserResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExercisesCompacrResultsExerciseIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExercisesCompacrResultsExerciseIdGet(params: {
    exerciseId: string;

  }): Observable<null | Array<CompactExerciseUserResult>> {

    return this.apiExercisesCompacrResultsExerciseIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<CompactExerciseUserResult>>) => r.body as null | Array<CompactExerciseUserResult>)
    );
  }

  /**
   * Path part for operation apiExercisesGet
   */
  static readonly ApiExercisesGetPath = '/api/exercises';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExercisesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExercisesGet$Response(params?: {
    challengeId?: string;

  }): Observable<StrictHttpResponse<null | Array<ExerciseCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ExercisesService.ApiExercisesGetPath, 'get');
    if (params) {

      rb.query('challengeId', params.challengeId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<ExerciseCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExercisesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExercisesGet(params?: {
    challengeId?: string;

  }): Observable<null | Array<ExerciseCompactResponse>> {

    return this.apiExercisesGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<ExerciseCompactResponse>>) => r.body as null | Array<ExerciseCompactResponse>)
    );
  }

  /**
   * Path part for operation apiExercisesPost
   */
  static readonly ApiExercisesPostPath = '/api/exercises';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExercisesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExercisesPost$Response(params?: {
      body?: ExerciseExtendedRequest
  }): Observable<StrictHttpResponse<ExerciseInfo>> {

    const rb = new RequestBuilder(this.rootUrl, ExercisesService.ApiExercisesPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExerciseInfo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExercisesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExercisesPost(params?: {
      body?: ExerciseExtendedRequest
  }): Observable<ExerciseInfo> {

    return this.apiExercisesPost$Response(params).pipe(
      map((r: StrictHttpResponse<ExerciseInfo>) => r.body as ExerciseInfo)
    );
  }

  /**
   * Path part for operation apiExercisesExerciseIdGet
   */
  static readonly ApiExercisesExerciseIdGetPath = '/api/exercises/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExercisesExerciseIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExercisesExerciseIdGet$Response(params: {
    exerciseId: string;

  }): Observable<StrictHttpResponse<ExerciseInfo>> {

    const rb = new RequestBuilder(this.rootUrl, ExercisesService.ApiExercisesExerciseIdGetPath, 'get');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExerciseInfo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExercisesExerciseIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExercisesExerciseIdGet(params: {
    exerciseId: string;

  }): Observable<ExerciseInfo> {

    return this.apiExercisesExerciseIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExerciseInfo>) => r.body as ExerciseInfo)
    );
  }

  /**
   * Path part for operation apiExercisesExerciseIdPut
   */
  static readonly ApiExercisesExerciseIdPutPath = '/api/exercises/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExercisesExerciseIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExercisesExerciseIdPut$Response(params: {
    exerciseId: string;
      body?: ExerciseRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExercisesService.ApiExercisesExerciseIdPutPath, 'put');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

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
   * To access the full response (for headers, for example), `apiExercisesExerciseIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExercisesExerciseIdPut(params: {
    exerciseId: string;
      body?: ExerciseRequest
  }): Observable<void> {

    return this.apiExercisesExerciseIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExercisesIdPost
   */
  static readonly ApiExercisesIdPostPath = '/api/exercises/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExercisesIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiExercisesIdPost$Response(params: {
    id: string;
      body?: { 'markdown'?: Blob }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExercisesService.ApiExercisesIdPostPath, 'post');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `apiExercisesIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiExercisesIdPost(params: {
    id: string;
      body?: { 'markdown'?: Blob }
  }): Observable<void> {

    return this.apiExercisesIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
