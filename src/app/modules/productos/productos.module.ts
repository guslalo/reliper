import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from './../shared/shared.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { QuoteComponent } from './components/quote/quote.component';


@NgModule({
  declarations: [IndexComponent, ItemDetailComponent, QuoteComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule
  ],
})
export class ProductosModule { }
