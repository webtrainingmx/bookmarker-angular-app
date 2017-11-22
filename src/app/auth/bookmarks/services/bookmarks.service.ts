import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { Bookmark } from '../models/bookmark.model';
import { Observable } from 'rxjs/Observable';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

@Injectable()
export class BookmarksService extends HttpService {

  constructor (public _http: HttpClient, private _authService: AuthenticationService) {
    super(_http);
  }

  getAll (): Observable<Array<Bookmark>> {
    const url = `${this.apiBookmarksURL}/bookmarks`;
    return this.get(url, this._authService.user.api_token);
  }

  update (bookmark: Bookmark): Observable<Bookmark> {
    const url = `${this.apiBookmarksURL}/bookmarks/${bookmark.id}`;
    return this.put(url, bookmark, this._authService.user.api_token);
  }

}
