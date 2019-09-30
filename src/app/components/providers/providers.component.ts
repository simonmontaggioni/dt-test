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

  constructor(public providerService: ProviderService) {
    super(providerService);
  }

  ngOnInit() {
    this.itemType = this.providerService.getItemType();
    this.itemList = this.providerService.getItemList();
    this.selectedItem = this.providerService.getSelectedItem();
    this.emptyItem =  { name: null, type: null,  code: null , country: null };
    this.action = '';
  }

}
