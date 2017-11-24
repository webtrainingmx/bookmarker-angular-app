import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { Bookmark } from '../models/bookmark.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BookmarksResponse } from '../models/bookmarks-response.model';

@Injectable()
export class BookmarksService extends HttpService {

  constructor (public _http: HttpClient, private _authService: AuthenticationService) {
    super(_http);
  }

  getAll (): Observable<BookmarksResponse> {
    // TODO: Connect with Java API
    // const url = `${this.apiBookmarksURL}/bookmarks`;
    const url = `${this.apiBookmarksURL}/bookmarks.json`;
    return this.get(url, this._authService.user.api_token);
  }

  update (bookmark: Bookmark): Observable<Bookmark> {
    // TODO: Connect with Java API
    // const url = `${this.apiBookmarksURL}/bookmarks/${bookmark.id}`;
    const url = `${this.apiBookmarksURL}/bookmarks/${bookmark.id}.json`;
    return this.put(url, bookmark, this._authService.user.api_token);
  }

}
