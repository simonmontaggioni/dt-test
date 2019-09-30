import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { PROVIDERS_LIST } from 'src/app/core/mock-providers-lis';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends GenericService {

  constructor() {
    super();
    this.itemList = PROVIDERS_LIST;
    this.emptyItem =  { name: null, type: null,  code: null , country: null };
  }

}
