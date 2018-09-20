import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { AboutRoutesModule } from './about-routes.module';

@NgModule({
  imports: [
    AboutRoutesModule
  ],
  declarations: [
    AboutComponent
  ]
})
export default class AboutModule {}
