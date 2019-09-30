import { Component, OnInit } from '@angular/core';
import { ITEM_LIST } from 'src/app/core/mock-item-list';
import { Item } from 'src/app/core/item';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itemList: Item[];
  selectedItem: Item;
  editItem: boolean;
  createItem: boolean;

  constructor(private productService: ProductService) {
    this.itemList = productService.getItemList();
    this.selectedItem = productService.getSelectedItem();
    this.editItem = false;
  }

  ngOnInit() {
  }

  createProduct() {
    this.productService.addItem({
      name: 'test',
      flag: 'test flag',
      area: 4242,
      population: 484848
    });
  }

  updateSeletedItem(item: Item) {
    this.productService.setSelectedItem(item);
    this.selectedItem = this.productService.getSelectedItem();
  }

  saveItem(item: Item) {

    this.productService.updateItem(item);
  }

  toogleEdit() {
    this.editItem = !this.editItem;
  }

  toogleCreate() {
    this.createItem = !this.createItem;
  }

}
