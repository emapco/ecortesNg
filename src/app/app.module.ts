import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {UiModule} from "./components/ui/ui.module";
import {PagesModule} from "./pages/pages.module";
import {ParticlesDirective} from "./directives/particles.directive";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    ParticlesDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SharedModule,
    CoreModule,  // mol-data service and cookies service
    UiModule,  // header, footer, and menu accordion-content
    PagesModule,  // home, resume, 404 page
    AppRoutingModule, ScullyLibModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
