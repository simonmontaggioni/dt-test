import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { STORES_LIST } from 'src/app/core/mock-stores-list';


@Injectable({
  providedIn: 'root'
})
export class StoreService  extends GenericService {

  constructor() {
    const emptyType = { name: null, code: null,  location: null, manager: null};
    super(STORES_LIST, emptyType);
  }
}
