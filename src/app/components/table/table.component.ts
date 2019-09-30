import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/core/item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() itemList: Item[];
  @Output() selectedItemEvent = new EventEmitter<Item>();

  page: number;
  pageSize: number;
  collectionSize: number;

  selectedItem: Item;
  itemAttributes: any[];

  constructor() {
    const item = {
      id: 5,
      name: 'tes',
      flag: 'france',
      area: '42342342',
      population: 43
    };
    this.itemAttributes = Object.keys(item);
   }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 6;
    this.collectionSize = this.itemList.length;
    console.log( 'items list', this.itemList);
  }

  getItemList(): Item[] {
    this.collectionSize = this.itemList.length;
    return this.itemList
      .map((item, i) => ({id: i + 1, ...item}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getItemAttributes(item: Item) {
    this.itemAttributes = Object.keys(item) as Array<keyof Item>;
    console.log(this.itemAttributes);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.selectedItemEvent.emit(this.selectedItem);
    console.log('selected item: ', this.selectedItem);
  }

  onItemSelected() {
    this.selectedItemEvent.emit(this.selectedItem);
  }

}
