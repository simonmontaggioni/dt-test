import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/core/generic-component';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent extends GenericComponent implements OnInit {

  constructor(public storeService: InventoryService ) {
    super(storeService, { name: null, code: null,  location: null, storeCode: null, supervisor: null});
  }

}
