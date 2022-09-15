import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() lightModeToggled = new EventEmitter();
  @Output() menuToggled = new EventEmitter();

  constructor() {}
}
