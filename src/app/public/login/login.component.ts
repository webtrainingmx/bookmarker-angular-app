import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalErrorLoginComponent } from './modal-error-login/modal-error-login.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);
  hidePassword = true;
  isLoggingIn = false;
  LABEL_EMPTY = 'Por favor ingresa un valor';
  PLACEHOLDER_USERNAME = 'Nombre de usuario';
  PLACEHOLDER_PASSWORD = 'Contraseña';

  constructor (public _authService: AuthenticationService,
               public _router: Router,
               public _locker: SessionStorageService,
               public dialog: MatDialog) {
  }

  getErrorMessageForUsername () {
    const hasError = this.username.hasError('required');
    return hasError ? this.LABEL_EMPTY : '';
  }

  getErrorMessageForPassword () {
    const hasError = this.password.hasError('required');
    return hasError ? this.LABEL_EMPTY : '';
  }

  openDialogWithError () {
    const dialogRef = this.dialog.open(ModalErrorLoginComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit () {
  }

  onSubmit (event: Event) {
    event.preventDefault();
    console.log(this.username.value, this.password.value);
    this.isLoggingIn = true;

    this._authService.logIn(this.username.value, this.password.value).subscribe(
      (data) => {
        this._authService.user = data;
        this._authService.hasSession = true;
        this._locker.store('user', data);
        this._router.navigate([ '/home' ]);
      },
      (err: HttpErrorResponse) => {
        if ( err.status === 406 ) {
          this.openDialogWithError();
        }
        console.error(err);
        this.isLoggingIn = false;
        this._authService.hasSession = false;
      }
    );
  }

}
