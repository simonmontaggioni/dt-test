import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { PROVIDERS_LIST } from 'src/app/core/mock-providers-lis';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends GenericService {

  constructor() {
    const emptyType =  { name: null, type: null,  code: null , country: null };
    super(PROVIDERS_LIST, emptyType);
  }

}
