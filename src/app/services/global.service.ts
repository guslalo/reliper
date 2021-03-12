import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public searchResults = [ ]

  constructor(public apiService:ApiService) { }

}
