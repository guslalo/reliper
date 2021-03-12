import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  categories = new BehaviorSubject(null);
  products = new BehaviorSubject(null);

  constructor(public apiService:ApiService) { 
  }

  /**
   * 
   * @param id Get all product
   */
  getProducts(param:any=null){
    this.apiService.getProducts(param).subscribe(
      data => {
        console.log(data)
        this.products.next(data)
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
  
}