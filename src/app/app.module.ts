import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatDialogModule,
  MatPaginatorIntl
} from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { BookmarksComponent } from './auth/bookmarks/bookmarks.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { EditBookmarkComponent } from './auth/bookmarks/edit-bookmark/edit-bookmark.component';

import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';
import { HttpService } from './common/services/http.service';
import { AuthenticationService } from './common/services/authentication.service';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';

import { BookmarksService } from './auth/bookmarks/services/bookmarks.service';
import { WindowReferenceService } from './common/services/window-reference.service';
import { MatPaginatorIntlSpanishProvider } from './common/paginator/mat-paginator-intl-spanish.provider';

import { routes } from './routes';
import { ModalErrorLoginComponent } from './public/login/modal-error-login/modal-error-login.component';
import { CutStringInWordsPipe } from './common/pipes/cut-string-in-words.pipe';
import { DemoComponent } from './public/demo/demo.component';
import { 404Component } from './public/404/404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    BookmarksComponent,
    NotFoundComponent,
    EditBookmarkComponent,
    ModalErrorLoginComponent,
    CutStringInWordsPipe,
    DemoComponent,
    404Component
  ],
  entryComponents: [
    EditBookmarkComponent,
    ModalErrorLoginComponent
  ],
  imports: [
    BrowserModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    // Required by Angular Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    // Auth
    Ng2Webstorage
  ],
  providers: [
    HttpService,
    PublicGuard, AuthGuard, // Guards
    AuthenticationService,
    BookmarksService,
    WindowReferenceService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlSpanishProvider },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
