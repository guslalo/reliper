import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
