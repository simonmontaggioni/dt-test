import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/core/item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() item: Item;
  @Output() savedItemEvent = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  saveItem(){
    this.onItemSaved();
  }

  onItemSaved() {
    this.savedItemEvent.emit(this.item);
  }

}
