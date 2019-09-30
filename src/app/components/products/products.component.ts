import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/item';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itemList: Item[];
  itemType: Item;
  selectedItem: Item;
  action: string;
  emptyItem =  { name: null, flag: null,  population: null , area: null };

  constructor(private productService: ProductService) {  }

  ngOnInit() {
    this.itemType = this.productService.getItemType();
    this.itemList = this.productService.getItemList();
    this.selectedItem = this.productService.getSelectedItem();
    this.action = '';
  }

  createProduct(item: Item) {
    this.productService.addItem(item);
  }

  onSelect(item: Item) {
    if (this.action === 'edit' || this.action === '') {
      this.updateSeletedItem(item);
    }
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
    const item = this.emptyItem;
    this.updateSeletedItem(item);
  }

  setAction(action: string) {
    this.action = action;
    if (this.action === 'create') {

      const item = this.emptyItem;
      this.updateSeletedItem(item);

    } else if (this.action === 'edit') {

      this.selectedItem = this.productService.getSelectedItem();

    }
  }

}
