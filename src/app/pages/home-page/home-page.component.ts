import { Component, OnInit } from '@angular/core';
import {ResumeCard, cards} from "../../resume";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  resumeCards: ResumeCard[] = cards;
  constructor() { }

  ngOnInit(): void {
  }

}
