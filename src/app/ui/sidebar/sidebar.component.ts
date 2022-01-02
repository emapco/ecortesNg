import {Component, OnInit} from '@angular/core';
import {ResumeCard, cards} from "../../pages/resume";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  resumeCards: ResumeCard[] = cards;

  constructor() {
  }

  ngOnInit() {
  }
}
