import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './services/contact.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService
  ]
})
export class CoreModule {}
