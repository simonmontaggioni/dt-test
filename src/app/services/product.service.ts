import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { PRODUCT_LIST } from 'src/app//core/mock-product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService  extends GenericService  {

  constructor() {
    const emptyType = { name: null, price: null,  description: null};
    super(PRODUCT_LIST, emptyType);
  }
}
