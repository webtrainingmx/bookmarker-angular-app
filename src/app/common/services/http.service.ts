import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor (private _http: HttpClient) {
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
