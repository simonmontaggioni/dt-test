import { Injectable } from '@angular/core';
import { ITEM_LIST } from 'src/app/core/mock-item-list';
import { Item } from 'src/app/core/item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  itemList = ITEM_LIST;
  selectedItem: Item;

  constructor() { }

  getItemList() {
    return this.itemList;
  }

  addItem( item: Item) {
    item.id = this.itemList.length + 1;
    this.itemList.push(item);
    console.log('prodcut service add item: ', this.itemList);
  }

  setSelectedItem(item: Item) {
    this.selectedItem = item;
  }

  getSelectedItem() {
    let item = {
      name: '',
      flag: '',
      area: '',
      population: ''
    };

    if (this.selectedItem) {
      item = this.selectedItem;
    }
    return item;
  }

  updateItem(item: Item) {
    console.log('update item service: item -', item);
    const itemIndex = this.itemList.findIndex(fitem => fitem.id === item.id);
    this.itemList[itemIndex] = item;
    console.log('update item service: ', itemIndex);
  }

  getItemType() {
    const item = { id: 0, name: '', flag: '', population: '' , area: ''};
    return item;
  }
}
