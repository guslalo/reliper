import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class SearchResultsModule { }
