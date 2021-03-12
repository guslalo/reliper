import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { QuotationService } from 'src/app/services/quotation.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotedProducts:Product[]
  quantityItem: number = 0;
  totalPrice:number = 0;

  constructor(private quotation:QuotationService) { 

    // quantity item listener
    this.quotation.quantityItem.subscribe((item) => {
      this.quantityItem = item
    })
    // total price item listener
    this.quotation.totalPrice.subscribe((item) => {
      this.totalPrice = item
    })

    // total items
    this.quotation.quotedProducts.subscribe((item) => {
      this.quotedProducts = item
    })
  }

  ngOnInit(): void {
  }

  change(id:any, value:any): void {
    this.quotation.addItem(id, value);
  }

}
