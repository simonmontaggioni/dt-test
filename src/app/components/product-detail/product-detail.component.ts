import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/core/item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
   item: Item;

  @Output()
   savedItemEvent = new EventEmitter<Item>();
  @Output()
   cancelEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSaveItem(){
    this.onItemSaved();
  }

  onItemSaved() {
    this.savedItemEvent.emit(this.item);
  }

  onCancel() {
    console.log('CANCELED');
    this.cancelEvent.emit('cancel');
  }

}
