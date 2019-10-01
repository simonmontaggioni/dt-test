import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  itemList: any[];
  selectedItem: any;
  emptyItem: any;
  messageService: MessageService;

  constructor(itemList: any[], emptyType: any) {
    this.messageService = new MessageService();
    this.itemList = itemList;
    this.emptyItem =  emptyType;
  }

  getItemList() {
    return this.itemList;
  }

  addItem( item: any) {
    item.id = this.itemList.length + 1;
    this.itemList.push(item);
    console.log('prodcut service add item: ', this.itemList);
  }

  setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  getSelectedItem() {
    let item = this.emptyItem;

    if (this.selectedItem) {
      item = this.selectedItem;
    }
    return item;
  }

  updateItem(item: any) {
    console.log('update item service: item -', item);
    const itemIndex = this.itemList.findIndex(fitem => fitem.id === item.id);
    this.itemList[itemIndex] = item;
    console.log('update item service: ', itemIndex);
  }


  deleteItem(item: any) {
    console.log('delete item service: item -', item);
    if ( this.itemList.filter(fitem => fitem.id === item.id )) {
      this.itemList.splice(this.itemList.findIndex(x => x.id === item.id), 1);
    }
    console.log( this.itemList );
  }

  getItemType() {
    const item = this.emptyItem;
    return item;
  }
}
