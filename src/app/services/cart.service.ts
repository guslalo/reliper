import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public totalCartPrice:string = '395.585'
  public cartItems:string

  constructor() { }
}
