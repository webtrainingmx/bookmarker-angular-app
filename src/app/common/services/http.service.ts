import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// import { Config } from '../config';

@Injectable()
export class HttpService {
  apiAuthBaseURL: string;
  apiBookmarksURL: string;

  constructor (protected _http: HttpClient) {
    this.apiAuthBaseURL = 'http://projects-api.webtraining.zone';
    this.apiBookmarksURL = 'http://localhost:8080/bookmarker/api/v1';
  }

  public get (url, token): Observable<any> {
    // new HttpHeaders() returns an immutable object,
    // so BE SURE you add your headers to the initial instance
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Api-Token', token);
    const options = {
      // This is NOT going to work, since the application/json is never assigned to the immutable object
      // headers: new HttpHeaders()
      //   .set('Content-Type', 'application/json')
      //   .set('Api-Token', token),
      headers: headers
    };

    return this._http.get(url, options);
  }

  public post (url, payload, token?): Observable<any> {
    // new HttpHeaders() returns an immutable object,
    // so BE SURE you add your headers to the initial instance
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Api-Token', token);

    const options = {
      // This is NOT going to work, since the application/json is never assigned to the immutable object
      // headers: new HttpHeaders()
      //   .set('Content-Type', 'application/json')
      //   .set('Api-Token', token),
      headers: headers
    };

    return this._http.post(url, payload, options);
  }

  public put (url, payload, token?): Observable<any> {
    // new HttpHeaders() returns an immutable object,
    // so BE SURE you add your headers to the initial instance
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Api-Token', token);
    // .set('Authorization', token);

    const options = {
      headers: headers
    };

    console.warn('Token', headers.get('Api-Token'), headers.get('Content-Type'));

    return this._http.put(url, payload, options);
  }


  public delete (url, token): Observable<any> {
    // new HttpHeaders() returns an immutable object,
    // so BE SURE you add your headers to the initial instance
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Api-Token', token);

    const options = {
      headers: headers
    };

    return this._http.delete(url, options);
  }

}
