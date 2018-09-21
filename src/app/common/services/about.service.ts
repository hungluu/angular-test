import { Injectable } from '@angular/core';
import { Observable, PartialObserver } from 'rxjs';

import { About } from '../models/about.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { KeyValue } from '../models/keyValue.model';

@Injectable()
export class AboutService {
  constructor (
    private apiService: ApiService
  ) {}

  getAbout (): Observable<About> {
    return this.apiService.get('about')
      .pipe(map(({ data }) => {
        const about = {};
        data.forEach(({key, value}) => about[key] = value);
        return <About> about;
      }));
  }
}
