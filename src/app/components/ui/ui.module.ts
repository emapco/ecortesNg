import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ]
})
export class UiModule {
}
