import {AfterViewInit, Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {cards, ResumeCard} from "../../../pages/resume";
import {MatAccordion} from "@angular/material/expansion";
import * as $ from "jquery";
import ClickEvent = JQuery.ClickEvent;

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css']
})
export class AccordionContentComponent implements AfterViewInit, OnDestroy {
  @Input() openAll: boolean = false;
  @Input() hideToggle: boolean = false;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  isOpened: boolean = false;
  resumeCards: ResumeCard[] = cards;

  constructor() {
  }

  ngAfterViewInit() {
    // proxy value to distinguish header accordion
    if (this.hideToggle) {
      $(document).on("click", (e: ClickEvent) => {
        let headerTag = $('#header_');
        if (!headerTag.is(e.target) && !headerTag.has(e.target).length) {
          this.accordion?.closeAll();
          this.isOpened = false;
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.hideToggle) {
      $(document).off("click");
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
