import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    IndexComponent, 
    MenuComponent, 
    CartComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
