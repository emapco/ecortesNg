import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AccordionContentComponent} from './accordian-content/accordion-content.component';
import {AppRoutingModule} from "../../app-routing.module";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AccordionContentComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class UiModule {
}
