import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter();
  private _lightMode: boolean = true;

  constructor() { }

  toggleMode() {
    this._lightMode = !this._lightMode;
  }

  get lightMode(): boolean {
    return this._lightMode;
  }
}
