import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ng2Webstorage } from 'ngx-webstorage';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { BookmarksComponent } from './auth/bookmarks/bookmarks.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { routes } from './routes';
import { HttpService } from './common/services/http.service';
import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';
import { AuthenticationService } from './common/services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    BookmarksComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    // Required by Angular Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    // Auth
    Ng2Webstorage
  ],
  providers: [
    HttpService,
    PublicGuard, AuthGuard, // Guards
    AuthenticationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
