import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../sales/product.model';
import { Order } from './order.model';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems : Product[] = [];

  constructor(private activatedRoute : ActivatedRoute,private productService:ProductService,private router : Router) { }

  ngOnInit() {    
    this.cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
  }

  changePrice(qty,price,idx) : void {
    this.cartItems[idx].qty = qty;
    this.cartItems[idx].totalPrice = price * parseInt(qty);
  }

  checkOut():void {
  //  alert(JSON.stringify(this.cartItems));
    let order = new Order();
    order.id = 1;
    order.orderDate = new Date();
    order.items = this.cartItems;
    let grandTotal = 0;
    for(let item of this.cartItems){
      grandTotal = grandTotal + item.totalPrice;
    }
    order.grandTotal = grandTotal;    
    sessionStorage.setItem("order",JSON.stringify(order));
    //this.router.navigate(['/orderDetail'],{queryParams : {order : JSON.stringify(order)}});
    this.router.navigate(['/orderDetail']);
  }
}
