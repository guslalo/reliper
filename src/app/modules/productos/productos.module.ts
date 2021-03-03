import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    NgxNumberSpinnerModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
