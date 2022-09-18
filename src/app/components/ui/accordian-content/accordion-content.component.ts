import {Component, HostListener, Input, ViewChild} from '@angular/core';
import {cards, ResumeCard} from "../../../pages/resume";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css']
})
export class AccordionContentComponent {
  @Input() openAll: boolean = false;
  @Input() hideToggle: boolean = false;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  isOpened: boolean = false;
  resumeCards: ResumeCard[] = cards;

  constructor() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.hideToggle && event.target) {
      let headerTag = document.querySelector('#header');
      // @ts-ignore
      if (headerTag !== event.target && (!headerTag.contains(event.target)) || event.target.innerText == "Emmanuel Cortes") {
        this.accordion?.closeAll();
        this.isOpened = false;
      }
    }
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
