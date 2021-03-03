import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { CartService } from './../../../../services/cart.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  public products = [ ]
  public product = { }
  public totalPrice:number
  public productObject:any;

  constructor( 
    public apiService:ApiService,
    public cartService:CartService
    ) { }

  change(value): void {
    console.log(value)
    this.totalPrice = value
  }
  dataChanged(event) {
    this.productObject = event
    console.log(this.productObject )
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(id?){
    this.apiService.getProducts().subscribe(
      data => {
        console.log(data)
        this.products = data
      },
      error => {
        console.log(error)
      }
    )
  }

  getDetails(id?){
    this.product = this.products.find(x => x.id === id);
    console.log(this.product)
  }


}
