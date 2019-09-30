import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/core/provider';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  itemList: Provider[];
  itemType: Provider;
  selectedItem: Provider;
  action: string;
  emptyItem: any;

  constructor(private productService: ProviderService) {  }

  ngOnInit() {
    this.itemType = this.productService.getItemType();
    this.itemList = this.productService.getItemList();
    this.selectedItem = this.productService.getSelectedItem();
    this.emptyItem =  { name: null, type: null,  code: null , country: null };
    this.action = '';
  }

  createItem(item: Provider) {
    this.productService.addItem(item);
  }

  updateItem(item: Provider) {
    this.productService.updateItem(item);
  }

  deleteItem(item: Provider) {
    alert('Are you sure to delete item id: ' + item.id);
    this.productService.deleteItem(item);
  }

  onSelect(item: Provider) {
    if (this.action === 'edit' || this.action === '') {
      this.updateSeletedItem(item);
    }
  }

  updateSeletedItem(item: Provider) {
      this.productService.setSelectedItem(item);
      this.selectedItem = this.productService.getSelectedItem();
  }

  saveItem(item: Provider) {
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
