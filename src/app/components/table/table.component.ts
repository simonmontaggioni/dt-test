import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() itemList: any[];
  @Input() itemType: any;
  @Output() selectedItemEvent = new EventEmitter<any>();

  page: number;
  pageSize: number;
  collectionSize: number;

  selectedItem: any;
  selectedItemId = '';
  itemAttributes: any[];

  constructor() {

   }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 6;
    this.collectionSize = this.itemList.length;
    console.log( 'items list', this.itemList);
    const item = this.itemType;
    this.itemAttributes = Object.keys(item);
    if ( this.selectedItem ) {
      this.selectedItemId = 'init';
    }
  }

  getItemList(): any[] {
    this.collectionSize = this.itemList.length;
    return this.itemList
      .map((item, i) => ({id: i + 1, ...item}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getItemAttributes(item: any) {
    this.itemAttributes = Object.keys(item) as Array<keyof any>;
    console.log(this.itemAttributes);
  }

  onSelect(item: any): void {
    this.selectedItem = item;
    // this.selectedItemId = this.selectedItem.id;
    this.selectedItemEvent.emit(this.selectedItem);
    console.log('selected item: ', this.selectedItem);
  }

  onItemSelected() {
    this.selectedItemEvent.emit(this.selectedItem);
  }

}
