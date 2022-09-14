import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {cards, ResumeCard} from "../../../pages/resume";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css']
})
export class AccordionContentComponent implements OnInit {
  @Input() openAll: boolean = false;
  @Input() hideToggle: boolean = false;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  isOpened: boolean = false;
  resumeCards: ResumeCard[] = cards;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle(): void {
    if (this.openAll) {
      if (this.isOpened) {
        this.accordion?.closeAll();
      } else {
        this.accordion?.openAll();
      }
    }
    this.isOpened = !this.isOpened;
  }

}
