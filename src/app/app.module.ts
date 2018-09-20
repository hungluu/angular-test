import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, NavbarComponent } from './common';
import { HomeModule } from './home/home.module';
import AboutModule from './about/about.module';
import { AppRoutesModule } from './app-routes.module';
import { CoreModule } from './common/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    AboutModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
