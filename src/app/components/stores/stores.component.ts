import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/core/generic-component';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent extends GenericComponent implements OnInit {

  constructor(public storeService: StoreService ) {
    // const emptyType = { name: null, price: null,  description: null};
    super(storeService, { name: null, code: null,  location: null, manager: null});
  }
}
