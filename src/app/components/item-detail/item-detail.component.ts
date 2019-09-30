import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: any;

  @Output() savedItemEvent = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<string>();

   itemAttributes: any[];

  constructor() {  }

  ngOnInit() {
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

  getItemAttributes(item: any) {
    this.itemAttributes = Object.keys(item) as Array<keyof any>;
    console.log(this.itemAttributes);
  }

}
