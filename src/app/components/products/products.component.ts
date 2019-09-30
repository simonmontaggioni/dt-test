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
  action: string;

  constructor(private productService: ProductService) {
    this.itemList = productService.getItemList();
    this.selectedItem = productService.getSelectedItem();
    this.action = '';
  }

  ngOnInit() {
  }

  createProduct(item: Item) {
    this.productService.addItem(item);
  }

  updateSeletedItem(item: Item) {
    this.productService.setSelectedItem(item);
    this.selectedItem = this.productService.getSelectedItem();
  }

  saveItem(item: Item) {
    // this.productService.updateItem(item);
    if (this.action === 'create') {
      this.createProduct(item);
    } else if ( this.action === 'edit') {

    }
    this.setAction('');
  }

  cancelOperation(action: string) {
    this.setAction(action);
    const item = { name: '', flag: '', population: 0 , area: 0};
    this.updateSeletedItem(item);
  }

  setAction(action: string) {
    this.action = action;
    if (this.action === 'create') {

      const item = { name: '', flag: '', population: 0 , area: 0};
      this.updateSeletedItem(item);

    } else if (this.action === 'edit') {

      this.selectedItem = this.productService.getSelectedItem();

    }
  }

}
