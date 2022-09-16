import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  currentYear: number = new Date().getFullYear();

  constructor() {
  }
}
