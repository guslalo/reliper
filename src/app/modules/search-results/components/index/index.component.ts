import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global.service'
import { ApiService } from '../../../../services/api.service'
import { QuotationService } from '../../../../services/quotation.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  public products = [ ]
  public product = { }
  public totalPrice:number
  public cartItem:number;
  public productObject:any;
  constructor(public globalService:GlobalService) { }

  ngOnInit(): void {
    console.log(this.globalService.searchResults)
    this.products = this.globalService.searchResults
  }

  change(value): void {
    console.log(value)
  }

  getDetails(id?){
    this.product = this.products.find(x => x.id === id);
    console.log(this.product)
  }


}
