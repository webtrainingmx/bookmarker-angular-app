import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);
  hidePassword = true;

  constructor (public _authService: AuthenticationService,
               public _router: Router,
               public _locker: SessionStorageService) {
  }

  getErrorMessageForUsername () {
    return this.username.hasError('required') ? 'Por favor ingresa un valor' : '';
  }

  getErrorMessageForPassword () {
    return this.password.hasError('required') ? 'Por favor ingresa un valor' : '';
  }


  ngOnInit () {
  }

  onSubmit (event: Event) {
    event.preventDefault();
    console.log(this.username.value, this.password.value);

    // this._authService.logIn(this.user.username, this.user.password).subscribe(
    //   (data) => {
    //     this._authService.user = data;
    //     this._authService.hasSession = true;
    //     this._locker.store('user', data);
    //     this._router.navigate([ '/home' ]);
    //   },
    //   err => {
    //     console.error(err);
    //     this._authService.hasSession = false;
    //   }
    // );
  }

}
