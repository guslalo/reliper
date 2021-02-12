import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ProductosModule } from '../../modules/productos/productos.module';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modules/productos/productos.module').then((m) => m.ProductosModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
