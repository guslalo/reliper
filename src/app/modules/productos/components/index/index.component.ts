import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { CartService } from './../../../../services/cart.service'
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
  public formProduct:FormGroup

  constructor( 
    public apiService:ApiService,
    public cartService:CartService,
    private fb: FormBuilder
    ) { }

  change(value): void {
    console.log(value)
    this.cartItem = value
    this.totalPrice = this.cartItem + value
    console.log(value)
  }
  dataChanged(event) {
    this.productObject = event
    console.log(this.productObject )
  }

  ngOnInit() {
    this.getProducts();
    this.formProduct = this.fb.group({
      name:'name',
      cant:1,
      price:'price'
    });
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

  getDetails(item){
    this.product = item
    console.log(this.product)
  }


}
