import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoModule } from '../producto/producto.module';
import { QuoteComponent } from '../productos/components/quote/quote.component';
import { ProductosModule } from '../productos/productos.module';


@NgModule({
  declarations: [
    IndexComponent, 
    MenuComponent, 
    CartComponent, 
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    ProductosModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class LayoutModule { }
