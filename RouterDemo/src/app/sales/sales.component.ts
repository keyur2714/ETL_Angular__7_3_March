import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from './product.model';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  productList : Product[] = [];
    
  cartItems : Product[] = [];

  @ViewChild("items")
  items : ElementRef;
  constructor(private router : Router,private productService:ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProductList();
  }

  addToCart(product : Product):void{    
    this.cartItems.push(product);
    this.items.nativeElement.innerHTML = "Number Of Items in Cart: "+this.cartItems.length;
  }

  showList():void {
    window.localStorage.removeItem("cartItems");
    window.localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
    this.router.navigate(['cartItems']);
  }
  


}
