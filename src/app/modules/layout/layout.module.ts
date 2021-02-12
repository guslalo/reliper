import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
