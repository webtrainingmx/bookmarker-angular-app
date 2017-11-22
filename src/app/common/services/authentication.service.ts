import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';

// import { Config } from '../config';


@Injectable()
export class AuthenticationService extends HttpService {
  hasSession = false;
  user;

  constructor (public _http: HttpClient, public _locker: SessionStorageService) {
    super(_http);
  }

  public isLoggedIn () {
    const user = this._locker.retrieve('user');
    if ( !!user ) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public logIn (username: string, password: string) {
    const url = `${this.apiAuthBaseURL}/users/login`;

    return this._http.post(url, {
      'username': username,
      'password': password
    });
  }

  public logout () {
    this.user = null;
    this.hasSession = false;
    this._locker.clear('user');
  }

}
