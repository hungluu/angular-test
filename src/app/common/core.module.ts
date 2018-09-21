import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from './services/about.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AboutService
  ]
})
export class CoreModule {}
