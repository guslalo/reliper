import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { QuotationService } from '../../../../services/quotation.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  public products_all = []
  public products_filter = []
  public product = {}
  paramsFilter = {}
  animate = true;
  public totalPrice:number
  public cartItem:number
  email = new FormControl(null, [Validators.required, Validators.email])

  constructor(private auth:Auth, 
    private route: ActivatedRoute,
    private quotation:QuotationService  
    ) { 
    // products listener
    this.auth.products.subscribe((products)=>{
      
      for(let px of products){
        let match = _.filter(this.products_all, { 'id': px.id});
        if(match.length == 0){
          this.products_all.push(px)
          this.products_filter.push(px)
        }
      }
    })

    // quantity item listener
    this.quotation.quantityItem.subscribe(() => {
      // refresh list
      // this.products_filter = _.cloneDeep(this.products_filter)
    })

  }
  
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.paramsFilter = params;
      // this.filters();
    });
  }

  /**
   * Add elements to cart
   * @param id 
   * @param value 
   */
  change(id:any, value:any): void {
    this.quotation.addItem(id, value);
  }
  
  /**
   * Open detail modal
   * @param item 
   */
  getDetails(item:any){
    this.product = item
    console.log(this.product)
  }

  /**
   * Filter list
   */
  filters(){
    let all = _.cloneDeep(this.products_all)

    // category filter
    if(this.paramsFilter['categories']){
      console.log('filter', this.paramsFilter['categories'])
      let filter = this.paramsFilter['categories']
      this.products_filter = _.filter(all, function(product:Product){
        const category_ids = _.mapValues(product.categories, 'name')
        const match = _.includes(category_ids, filter)
        if(match){
          return match
        }else{
          
          let match_parent = _.find(product.categories, {'parent': {'name': filter}})
          if(!_.isEmpty(match_parent)){
            return true
          }
        }
        return false
      })
    }

    // search filter
    if(this.paramsFilter['search']){
      let filter = this.paramsFilter['search']
      this.products_filter = _.filter(all, function(p:Product){
        return String(p.name).toLowerCase().search(String(filter).toLowerCase()) != -1;
      })
    }

    // no filter
    if(_.isEmpty(this.paramsFilter)){
      this.products_filter = this.products_all;
    }
  }

  // addProductView(product:Product){
  //   let match = _.filter(this.products_filter, { 'id': product.id});
  //       if(match.length == 0){
  //         this.products_filter.push(product)
  //       }
  // }

  


}
