import { Component, OnInit } from '@angular/core';
import {cards, ResumeCard} from "../resume";

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  resumeCards: ResumeCard[] = cards;
  constructor() { }

  ngOnInit(): void {
  }


}
