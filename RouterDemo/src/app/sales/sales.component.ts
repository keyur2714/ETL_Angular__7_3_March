import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  productList : Product[] = [];
    
  cartItemsIds : number[] = [];

  @ViewChild("items")
  items : ElementRef;
  constructor(private router : Router) { }

  ngOnInit() {
    let product1 = new Product(1,'apple','Apple',200);
    let product2 = new Product(2,'banana','Banana',40);
    let product3 = new Product(3,'custerdapple','C Apple',100);
    let product4 = new Product(4,'guava','Guava',60);
    let product5 = new Product(5,'mango','Mango',300);
    let product6 = new Product(6,'pineapple','Pineapple',60);
    let product7 = new Product(7,'strawberry','Strawberry',100);
    let product8 = new Product(8,'watermelon','Water Melon',60);

    this.productList.push(product1);
    this.productList.push(product2);
    this.productList.push(product3);
    this.productList.push(product4);
    this.productList.push(product5);
    this.productList.push(product6);
    this.productList.push(product7);
    this.productList.push(product8);

  }

  addToCart(product : Product):void{    
    this.cartItemsIds.push(product.id);
    this.items.nativeElement.innerHTML = "Number Of Items in Cart: "+this.cartItemsIds.length;
  }

  showList():void {
    window.localStorage.removeItem("cartItemIds");
    let itemIds = '';
    alert(this.cartItemsIds.length);
    for(let i=0;i<this.cartItemsIds.length;i++){
      if(i === this.cartItemsIds.length - 1){
        itemIds = itemIds + this.cartItemsIds[i];  
      }else{
        itemIds = itemIds + this.cartItemsIds[i] + ',';
      }      
    }
    window.localStorage.setItem("cartItemIds",itemIds);
    this.router.navigate(['cartItems',itemIds]);
  }
  


}
