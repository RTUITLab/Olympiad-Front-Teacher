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
export class AdminService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminForceresetqueuePost
   */
  static readonly ApiAdminForceresetqueuePostPath = '/api/admin/forceresetqueue';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminForceresetqueuePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminForceresetqueuePost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminForceresetqueuePostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminForceresetqueuePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminForceresetqueuePost$Plain(params?: {

  }): Observable<number> {

    return this.apiAdminForceresetqueuePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminForceresetqueuePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminForceresetqueuePost$Json$Response(params?: {

  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminForceresetqueuePostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminForceresetqueuePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminForceresetqueuePost$Json(params?: {

  }): Observable<number> {

    return this.apiAdminForceresetqueuePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
