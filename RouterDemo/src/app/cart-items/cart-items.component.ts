import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    alert(window.localStorage.getItem("cartItemIds"));

    this.activatedRoute.params.subscribe(
      (params)=>{
        alert("-------"+params.itemIds);
      }
    )

    
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        alert("-------"+paramMap.get("itemIds"));
      }
    )

    
  }

}
