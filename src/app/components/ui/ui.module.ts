import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import { AccordionContentComponent } from './accordian-content/accordion-content.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AccordionContentComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    AccordionContentComponent
  ]
})
export class UiModule {
}
