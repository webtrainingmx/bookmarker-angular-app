import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../common/services/authentication.service';

@Injectable()
export class BookmarksService extends HttpService {

  constructor (public _http: HttpClient, private _authService: AuthenticationService) {
    super(_http);
  }

  getAll () {
    const url = `${this.apiBookmarksURL}/bookmarks`;

    return this.get(url, this._authService.user.api_token);
  }


}