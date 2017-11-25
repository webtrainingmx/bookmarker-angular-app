import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  constructor (public _authService: AuthenticationService, public router: Router) {
  }

  ngOnInit () {
  }

  logout (event: Event) {
    event.preventDefault();
    this._authService.logout();
    this.router.navigate([ '/login' ]);
  }
}
