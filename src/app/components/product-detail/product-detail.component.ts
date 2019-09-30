import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/core/item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() item: Item;
  @Input() itemType: Item;

  @Output() savedItemEvent = new EventEmitter<Item>();
  @Output() cancelEvent = new EventEmitter<string>();

   itemAttributes: any[];

  constructor() {  }

  ngOnInit() {
    const item = this.itemType;
    this.itemAttributes = Object.keys(this.item);
    console.log('items attributes: ', this.itemAttributes);
  }

  onSaveItem() {
    this.onItemSaved();
  }

  onItemSaved() {
    this.savedItemEvent.emit(this.item);
  }

  onCancel() {
    console.log('CANCELED');
    this.cancelEvent.emit('cancel');
  }

  getItemAttributes(item: Item) {
    this.itemAttributes = Object.keys(item) as Array<keyof Item>;
    console.log(this.itemAttributes);
  }

}
