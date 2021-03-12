import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { QuotationService } from '../../../../services/quotation.service'
import * as _ from 'lodash';
import { Auth } from 'src/app/services/auth.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-quotation',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantityItem: number = 0;
  public totalPrice:number = 0;

  constructor(public quotation:QuotationService, 
              public auth:Auth) {

      // quantity item listener
      this.quotation.quantityItem.subscribe((item) => {
        this.quantityItem = item
      })
      // total price item listener
      this.quotation.totalPrice.subscribe((item) => {
        this.totalPrice = item
      })
  }

  ngOnInit(): void {}

  

}
