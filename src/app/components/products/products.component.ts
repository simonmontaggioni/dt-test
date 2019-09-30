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

  createItem(item: Item) {
    this.productService.addItem(item);
  }

  updateItem(item: Item) {
    this.productService.updateItem(item);
  }

  deleteItem(item: Item) {
    alert('Are you sure to delete item id: ' + item.id);
    this.productService.deleteItem(item);
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
    if (this.action === 'create') {
      this.createItem(item);
    } else if ( this.action === 'edit') {
      this.updateItem(item);
    }
    this.setAction('');
  }

  cancelOperation(action: string) {
    this.setAction('');
    const item = this.emptyItem;
    this.updateSeletedItem(item);
  }

  setAction(action: string) {
    this.action = action;
    if ( this.action === 'create' ) {

      const item = this.emptyItem;
      this.updateSeletedItem(item);

    } else if ( this.action === 'edit' ) {

      this.selectedItem = this.productService.getSelectedItem();

    } else if ( this.action === 'delete' ) {

      this.selectedItem = this.productService.getSelectedItem();
      this.deleteItem(this.selectedItem);
      this.setAction('');
      const item = this.emptyItem;
      this.updateSeletedItem(item);
    }
  }

}
