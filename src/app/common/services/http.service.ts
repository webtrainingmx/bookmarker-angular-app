import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Config } from '../config';

@Injectable()
export class HttpService {
  apiAuthBaseURL: string;
  apiBookmarksURL: string;

  constructor (protected _http: HttpClient) {
    this.apiAuthBaseURL = 'http://projects-api.webtraining.zone';
    this.apiBookmarksURL = 'http://localhost:8080/bookmarker/api/v1/';
  }

  public get (url, token): Observable<any> {
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Api-Token', token),
    };

    return this._http.get(url, options);
  }

  public post (url, params, token?): Observable<any> {

    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Api-Token', token),
    };

    return this._http.post(url, params, options);
  }


  public delete (url, token): Observable<any> {
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Api-Token', token),
    };

    return this._http.delete(url, options);
  }

}
