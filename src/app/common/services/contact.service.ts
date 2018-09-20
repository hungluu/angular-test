import { Injectable } from '@angular/core';
import { Observable, PartialObserver } from 'rxjs';

import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  findOne(): Observable<Contact> {
    return Observable.create(function (observer: PartialObserver<Contact>) {
      observer.next({
        name: 'Hung Luu',
        github: 'https://github.com/hungluu'
      });
      observer.complete();
    });
  }
}
