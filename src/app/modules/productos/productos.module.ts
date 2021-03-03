import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { SharedModule } from './../shared/shared.module';
//import { SafePipe } from './../../pipes/safe.pipe';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    NgxNumberSpinnerModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
