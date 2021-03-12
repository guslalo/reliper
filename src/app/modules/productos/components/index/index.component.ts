import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { QuotationService } from '../../../../services/quotation.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
  public totalPrice:number
  public cartItem:number
  public productObject:any
  public formProduct:FormGroup

  constructor(private auth:Auth, 
    private route: ActivatedRoute,
    private quotation:QuotationService  
    ) { 
    // products listener
    this.auth.products.subscribe((products)=>{
      this.products_all = products;
      this.products_filter = products;
    })

    // quantity item listener
    this.quotation.quantityItem.subscribe(() => {
      // refresh list
      this.products_filter = _.cloneDeep(this.products_filter)
    })

  }
  
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {

      this.paramsFilter = params;
      this.filters();
    });
  }

  change(id:any, value:any): void {
    this.quotation.addItem(id, value);
  }

  dataChanged(event) {
    this.productObject = event
    console.log(this.productObject )
  }
  
  getDetails(item:any){
    this.product = item
    console.log(this.product)
  }

  filters(){
    console.log('filter', this.paramsFilter)
    if(this.paramsFilter['categories']){
      let filter = this.paramsFilter['categories']
      let all = _.cloneDeep(this.products_all)
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

    // no filter
    if(_.isEmpty(this.paramsFilter)){
      this.products_filter = this.products_all;
    }
  }


}
