import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {MarkdownService} from "ngx-markdown";
import {UiModule} from "./ui/ui.module";
import {PagesModule} from "./pages/pages.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    UiModule,
    PagesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
