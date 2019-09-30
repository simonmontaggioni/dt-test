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
      area: 0,
      population: 0
    };

    if (this.selectedItem) {
      item = this.selectedItem;
    }
    return item;
  }

  updateItem(item: Item) {
    console.log('update item service: item -', item);
    const index = this.getItemList().findIndex( x => x.id === item.id );

    // this.getItemList()[index].name = item.name;
    // this.getItemList()[index].flag = item.flag;
    // console.log('update item service: ', searchItem);
  }
}
