/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CommentResponce } from '../models/comment-responce';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCommentPost
   */
  static readonly ApiCommentPostPath = '/api/Comment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentPost$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `apiCommentPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentPost(params?: {

  }): Observable<void> {

    return this.apiCommentPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCommentPageNumGet
   */
  static readonly ApiCommentPageNumGetPath = '/api/Comment/{pageNum}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentPageNumGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentPageNumGet$Response(params: {
    pageNum: number;

  }): Observable<StrictHttpResponse<null | Array<CommentResponce>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentPageNumGetPath, 'get');
    if (params) {

      rb.path('pageNum', params.pageNum, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<CommentResponce>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCommentPageNumGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentPageNumGet(params: {
    pageNum: number;

  }): Observable<null | Array<CommentResponce>> {

    return this.apiCommentPageNumGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<CommentResponce>>) => r.body as null | Array<CommentResponce>)
    );
  }

}
