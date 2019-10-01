import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { INVENTORIES_LIST } from 'src/app/core/mock-inventories-list';

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends GenericService {

  constructor() {
    const emptyType = { name: null, code: null,  location: null, storeCode: null, supervisor: null};
    super(INVENTORIES_LIST, emptyType);
  }
}
