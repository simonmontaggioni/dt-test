import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { GenericComponent } from 'src/app/core/generic-component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends GenericComponent implements OnInit {

  constructor(public productService: GenericService) {
    super(productService);
  }

  ngOnInit() {
    this.itemType = this.productService.getItemType();
    this.itemList = this.productService.getItemList();
    this.selectedItem = this.productService.getSelectedItem();
    this.emptyItem =  { name: null, type: null,  code: null , country: null };
    this.action = '';
  }

}
