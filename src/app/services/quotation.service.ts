import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import * as _ from 'lodash';
import { Auth } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  totalPrice= new BehaviorSubject(0)
  quantityItem = new BehaviorSubject(0)
  products_all:Product[]
  quotedProductsArray = []
  quotedProducts = new BehaviorSubject(null)

  constructor(private auth:Auth) { 
    this.auth.products.subscribe((products)=>{
      this.products_all = products;
      this.updateQList()
    })
    this.updateQList()
  }

  /**
   * Add item for quote
   * @param id id product
   * @param quantity 
   */
  public addItem(id: number, quantity: number){
    let newList = []
    // get existing data
    let qlist: any = JSON.parse(String(localStorage.getItem('qlist')))
    if (qlist){
      newList = qlist;
    }
    // check exist in list
    let match = _.find(newList, {'id': id})
    if (match){
      match['quantity'] = quantity
    }else{
      let newValue = {'id':id, 'quantity': quantity}
      newList.push(newValue)
    }
    localStorage.setItem('qlist', JSON.stringify(newList));
    this.updateQList()
  }

  /**
   * Update quotation list (merge)
   */
  updateQList(){
    let newList = []
    // get existing data
    let qlist: any = JSON.parse(String(localStorage.getItem('qlist')))
    if (qlist){
      newList = qlist;
    }
    this.quotedProductsArray = newList
    this.calculateQuote()
  }

  /**
   * Calculate items
   */
  calculateQuote(){

    if(this.products_all && this.quotedProductsArray){
      console.log('quotation items', this.quotedProductsArray)
      // sum quantity
      let quantityItem = _.sumBy(this.quotedProductsArray, function(o) {
        return parseFloat(o.quantity)
      })
      this.quantityItem.next(quantityItem)
      // quotation list and product list merge
      let quotedProducts = _.filter(this.products_all, (product:Product)=>{
        if(product.price_1){
          return _.includes(_.mapValues(this.quotedProductsArray, 'id'), product.id) 
        }
        return false
      })
      this.quotedProducts.next(quotedProducts)
      // sum prices
      const quotedTemp = this.quotedProductsArray;
      let totalPrice = _.sumBy(quotedProducts, function(p) {
        try{
          let item = _.find(quotedTemp, {'id': p.id})
          return parseFloat(p.price_1) * item.quantity 
        }catch(ex){}
      })
      this.totalPrice.next(totalPrice)
    }      
  }
}
