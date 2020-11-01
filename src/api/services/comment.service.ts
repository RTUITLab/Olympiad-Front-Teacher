/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Comment } from '../models/comment';
import { PostComment } from '../models/post-comment';

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
   * Path part for operation apiCommentSolutionIdPost
   */
  static readonly ApiCommentSolutionIdPostPath = '/api/Comment/{solutionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentSolutionIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentSolutionIdPost$Response(params: {
    solutionId: string;
      body?: null | Array<PostComment>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentSolutionIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCommentSolutionIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentSolutionIdPost(params: {
    solutionId: string;
      body?: null | Array<PostComment>
  }): Observable<void> {

    return this.apiCommentSolutionIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCommentGet
   */
  static readonly ApiCommentGetPath = '/api/Comment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentGet$Response(params?: {
    solutionId?: string;

  }): Observable<StrictHttpResponse<null | Array<Comment>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentGetPath, 'get');
    if (params) {

      rb.query('solutionId', params.solutionId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<null | Array<Comment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCommentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentGet(params?: {
    solutionId?: string;

  }): Observable<null | Array<Comment>> {

    return this.apiCommentGet$Response(params).pipe(
      map((r: StrictHttpResponse<null | Array<Comment>>) => r.body as null | Array<Comment>)
    );
  }

}
