import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    NgxNumberSpinnerModule,
    ProductosRoutingModule,
    ReactiveFormsModule, 
    FormsModule 
  ]
})
export class ProductosModule { }
