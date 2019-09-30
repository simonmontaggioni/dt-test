export class GenericComponent {


  itemList: any[];
  itemType: any;
  selectedItem: any;
  action: string;
  emptyItem: any;
  itemService: any;

  constructor() {  }

  createItem(item: any) {
    this.itemService.addItem(item);
  }

  updateItem(item: any) {
    this.itemService.updateItem(item);
  }

  deleteItem(item: any) {
    alert('Are you sure to delete item id: ' + item.id);
    this.itemService.deleteItem(item);
  }

  onSelect(item: any) {
    if (this.action === 'edit' || this.action === '') {
      this.updateSeletedItem(item);
    }
  }

  updateSeletedItem(item: any) {
      this.itemService.setSelectedItem(item);
      this.selectedItem = this.itemService.getSelectedItem();
  }

  saveItem(item: any) {
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

      this.selectedItem = this.itemService.getSelectedItem();

    } else if ( this.action === 'delete' ) {

      this.selectedItem = this.itemService.getSelectedItem();
      this.deleteItem(this.selectedItem);
      this.setAction('');
      const item = this.emptyItem;
      this.updateSeletedItem(item);
    }
  }
}