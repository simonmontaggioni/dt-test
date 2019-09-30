import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/core/provider';
import { ProviderService } from 'src/app/services/provider.service';
import { GenericComponent } from 'src/app/core/generic-component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent extends GenericComponent implements OnInit {



  constructor(public productService: ProviderService) {
    super();
    this.productService = productService;
  }

  ngOnInit() {
    this.itemType = this.productService.getItemType();
    this.itemList = this.productService.getItemList();
    this.selectedItem = this.productService.getSelectedItem();
    this.emptyItem =  { name: null, type: null,  code: null , country: null };
    this.action = '';
  }

}
