import {Component, OnInit} from '@angular/core';
import {ResumeCard, cards} from "../../resume";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  resumeCards: ResumeCard[] = cards;

  constructor() {
  }

  ngOnInit() {
  }
}
