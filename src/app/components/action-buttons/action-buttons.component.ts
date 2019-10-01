import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent implements OnInit {

  @Input() item;
  @Output() actionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setAction(action: string) {
    this.actionEvent.emit(action);
  }

}
