import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import {
  Observable,
  throwError, of
} from 'rxjs';
import {
  catchError,
  map,
  retry
} from 'rxjs/operators';
import {
  EnvironmentService
} from './environment.service';



interface ReqParams {
  [key: string]: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
private readonly apiUrl: string;
  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,

    ) {
      this.apiUrl = this.environment.getApiUrl();
    }


  /**
   * will attach '?' if user privides a queyr param
   * if doesn't provide a query param no need to map anythning
   * to array and returns ''
   * if qp has query params then they will be joined on &
   */
  private correctrFOrmatForQueryURL(qp: ReqParams): string {
    if (!qp) {
      return '';
    }
    const qpAsStr = this.mapQueryParmsToURL(qp);
    return qpAsStr.length === 0 ? '' : `?${qpAsStr.join('&')}`;
  }

 /**
  *
  * @param qp
  * @returns an array of key value pairs
  *
  */
  private mapQueryParmsToURL(qp: ReqParams): Array<string> {
    return Object.keys(qp).map((key: string) => `${key}=${qp[key]}`);
  }

  getRemove<returnType>(
    id: number | null,
    route: string,
    qp: ReqParams = {},
    method: 'get' | 'delete' = 'get'
  ): Observable<returnType> {
    const cfqu = this.correctrFOrmatForQueryURL(qp);
    return this.http[method](
      `${this.apiUrl}${route}${id ? '/' + id : ''}${cfqu}`
    ) as Observable<returnType>;
  }

  postPatch<returnType>(
    route: string,
    data: any,
    id: number,
    qp: ReqParams = {},
    method: 'post' | 'patch' = 'post'
  ): Observable<returnType> {
    const cfqu = this.correctrFOrmatForQueryURL(qp);
    return this.http[method](
      `${this.apiUrl}/${route}${id ? '/' + id : ''}${cfqu}`, data
    ) as Observable<returnType>;
  }

}
