import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-bar',
  templateUrl: './selection-bar.component.html',
  styleUrls: ['./selection-bar.component.css']
})
export class SelectionBarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openItem( routeName: string ) {
    this.router.navigateByUrl( `/${routeName}`);
    console.log(routeName);
  }

}
