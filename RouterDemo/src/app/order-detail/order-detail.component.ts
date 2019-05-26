import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../cart-items/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order :Order = new Order();

  constructor(private activateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe(
      (queryParams)=>{
        this.order = JSON.parse(queryParams.get('order'));
      }
    )
    this.order = JSON.parse(sessionStorage.getItem("order"));
  }

}
