/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ExerciseDataCompactResponse } from '../models/exercise-data-compact-response';
import { ExerciseDataRequest } from '../models/exercise-data-request';
import { ExerciseDataResponse } from '../models/exercise-data-response';

@Injectable({
  providedIn: 'root',
})
export class ExerciseDataService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiExerciseDataExerciseIdGet
   */
  static readonly ApiExerciseDataExerciseIdGetPath = '/api/ExerciseData/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExerciseDataExerciseIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExerciseDataExerciseIdGet$Response(params: {
    exerciseId: string;

  }): Observable<StrictHttpResponse<null | Array<ExerciseDataCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ExerciseDataService.ApiExerciseDataExerciseIdGetPath, 'get');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<ExerciseDataCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExerciseDataExerciseIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExerciseDataExerciseIdGet(params: {
    exerciseId: string;

  }): Observable<null | Array<ExerciseDataCompactResponse>> {

    return this.apiExerciseDataExerciseIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<ExerciseDataCompactResponse>>) => r.body as null | Array<ExerciseDataCompactResponse>)
    );
  }

  /**
   * Path part for operation apiExerciseDataExerciseIdPost
   */
  static readonly ApiExerciseDataExerciseIdPostPath = '/api/ExerciseData/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExerciseDataExerciseIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExerciseDataExerciseIdPost$Response(params: {
    exerciseId: string;
      body?: ExerciseDataRequest
  }): Observable<StrictHttpResponse<ExerciseDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExerciseDataService.ApiExerciseDataExerciseIdPostPath, 'post');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExerciseDataResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExerciseDataExerciseIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExerciseDataExerciseIdPost(params: {
    exerciseId: string;
      body?: ExerciseDataRequest
  }): Observable<ExerciseDataResponse> {

    return this.apiExerciseDataExerciseIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<ExerciseDataResponse>) => r.body as ExerciseDataResponse)
    );
  }

  /**
   * Path part for operation apiExerciseDataAllExerciseIdGet
   */
  static readonly ApiExerciseDataAllExerciseIdGetPath = '/api/ExerciseData/all/{exerciseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExerciseDataAllExerciseIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExerciseDataAllExerciseIdGet$Response(params: {
    exerciseId: string;

  }): Observable<StrictHttpResponse<null | Array<ExerciseDataResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ExerciseDataService.ApiExerciseDataAllExerciseIdGetPath, 'get');
    if (params) {

      rb.path('exerciseId', params.exerciseId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<ExerciseDataResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExerciseDataAllExerciseIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExerciseDataAllExerciseIdGet(params: {
    exerciseId: string;

  }): Observable<null | Array<ExerciseDataResponse>> {

    return this.apiExerciseDataAllExerciseIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<ExerciseDataResponse>>) => r.body as null | Array<ExerciseDataResponse>)
    );
  }

  /**
   * Path part for operation apiExerciseDataExerciseDataIdPut
   */
  static readonly ApiExerciseDataExerciseDataIdPutPath = '/api/ExerciseData/{exerciseDataId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExerciseDataExerciseDataIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExerciseDataExerciseDataIdPut$Response(params: {
    exerciseDataId: string;
      body?: ExerciseDataRequest
  }): Observable<StrictHttpResponse<ExerciseDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExerciseDataService.ApiExerciseDataExerciseDataIdPutPath, 'put');
    if (params) {

      rb.path('exerciseDataId', params.exerciseDataId, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExerciseDataResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExerciseDataExerciseDataIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExerciseDataExerciseDataIdPut(params: {
    exerciseDataId: string;
      body?: ExerciseDataRequest
  }): Observable<ExerciseDataResponse> {

    return this.apiExerciseDataExerciseDataIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<ExerciseDataResponse>) => r.body as ExerciseDataResponse)
    );
  }

}
