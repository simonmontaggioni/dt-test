import { Component, OnInit } from '@angular/core';
import { ITEM_LIST } from 'src/app/core/mock-item-list';
import { Item } from 'src/app/core/item';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itemList: Item[];
  selectedItem: Item;

  constructor() {
    this.itemList = ITEM_LIST;
    this.selectedItem = {
      id: 100,
      name: 'test 100',
      flag: 'test flag',
      area: 4242,
      population: 484848

    }
  }

  ngOnInit() {
  }

  createProduct() {
    this.itemList.push({
      id: 45,
      name: 'test',
      flag: 'test flag',
      area: 4242,
      population: 484848

    });

    console.log(this.itemList);
  }

}
