import { Component, OnInit } from '@angular/core';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  constructor() { }

  ngOnInit(): void {
    const p1 = new Product('01','ข้าวมันไก่',60,true,5.0);
    const p2 = new Product('02','ข้าวผัด',40,true,4.0);
    const p3 = new Product('03','ยำวุ้นเส้น',50,false,4.5);
    this.products.push(p1,p2,p3);
  }

}
