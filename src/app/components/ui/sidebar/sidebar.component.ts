import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor() {
  }

  ngOnInit() {
  }
}
