import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { GenericComponent } from 'src/app/core/generic-component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends GenericComponent implements OnInit {

  constructor(public productService: ProductService ) {
    super(productService);
  }

  ngOnInit() {
    this.itemType = this.productService.getItemType();
    this.itemList = this.productService.getItemList();
    this.selectedItem = this.productService.getSelectedItem();
    this.emptyItem =  { name: null, flag: null,  area: null , population: null };
    this.action = '';
  }

}
