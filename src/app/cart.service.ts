import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {
 items = [];
 products = []; 
  constructor(
    private http:HttpClient
  ) { }


  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getProduct(){
    return this.products;
  }

  addProduct(product){
    this.products.push(product);
  }

  getShippingPrices(){
    return this.http.get('assets/shipping.json');
  }
}