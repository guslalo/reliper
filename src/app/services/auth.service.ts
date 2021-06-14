import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { ApiService } from './api.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  categories = new BehaviorSubject(null);
  products:BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  limit = 20
  offset = 0
  count = 0
  
  public products$!:Observable<Product[]>;

  constructor(public apiService:ApiService) { 
    // this.products$ = new Observable((observer) => {
    //   this.products.subscribe(values => {
    //     if(values){
    //       observer.add(values)
    //     }
    //   })
    // });
  }

  /**
   * 
   * @param id Get all product
   */
  getProducts(param:any=null){
    param = {'limit': this.limit, 'offset': this.offset, 'ordering': 'id'}
    this.apiService.getProducts(param).subscribe(
      async data => {
        // console.log('products', data)
        const products:Product[] = data.results
        let myProd = this.products.getValue()
        myProd.push(...products)
        this.products.next(myProd)
        if(this.products.getValue().length < data.count){
          this.offset += this.limit
          await this.delay(500);
          this.getProducts()
        }else{
          console.log('product', this.products.getValue())
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  getCategories(){ 
    this.apiService.getCategories().subscribe(
      data => {
        this.categories.next(data)
        console.log('categories', data)
      },
      error => {
        console.log(error)
      }
    )
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  
}