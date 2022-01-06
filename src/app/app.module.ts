import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {UiModule} from "./ui/ui.module";
import {PagesModule} from "./pages/pages.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    UiModule,
    PagesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
