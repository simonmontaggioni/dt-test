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
    // const emptyType = { name: null, price: null,  description: null};
    super(productService, { name: null, price: null,  description: null});
  }
}
