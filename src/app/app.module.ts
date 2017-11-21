import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { BookmarksComponent } from './auth/bookmarks/bookmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
