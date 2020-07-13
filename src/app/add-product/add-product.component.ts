import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CartService } from '../cart.service';


import{products,Product} from './../products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = new Product();
  addForm
  
  constructor(
    private formBuilder:FormBuilder,
    private cartService:CartService
  ) {

  this.addForm = this.formBuilder.group({
      
      name: '',
      price: '',
      description: '',
    });
    
  }


  ngOnInit() {

  }
  
onSubmit(customerData){
    
    this.addForm.reset();
    this.product.name=customerData.name ;
    this.product.price = customerData.price;
    this.product.description = customerData.description;
  
    products.push(this.product);
    console.warn('Your product has been added', customerData);
  }

}