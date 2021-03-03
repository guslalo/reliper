import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';


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
  },
  {
    path: 'categoria/:id',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modules/producto/producto.module').then((m) => m.ProductoModule),
      }
    ]
  },
  {
    path: 'resultados-de-busqueda',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modules/search-results/search-results.module').then((m) => m.SearchResultsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
