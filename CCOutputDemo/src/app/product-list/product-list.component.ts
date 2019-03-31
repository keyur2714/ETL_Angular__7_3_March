import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  headerNames : string[] = ['Id',"Code","Desc","Price"];
  columnList : string[]= ["id","code","desc","price"];

  selectedProduct : Product = new Product();

  constructor() { }

  ngOnInit() {
    let product1 = new Product(1,'APPLE','Apple Fruit',100);
    let product2 = new Product(2,'MANGO','Mango Fruit',300);
    let product3 = new Product(3,'GRAPES','Grapes Fruit',50);

    this.productList.push(product1);
    this.productList.push(product2);
    this.productList.push(product3);
  }

  getRow(product:Product){
    this.selectedProduct = product;
  } 

}
