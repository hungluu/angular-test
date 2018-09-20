import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import HomeRoutesModule from './home-routes.module';

@NgModule({
  imports: [
    HomeRoutesModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
