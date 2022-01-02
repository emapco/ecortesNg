import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {MarkdownService} from "ngx-markdown";
import {UiModule} from "./ui/ui.module";
import {PagesModule} from "./pages/pages.module";
import {CookiesService} from "./shared/cookies.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    UiModule,
    PagesModule,
  ],
  providers: [MarkdownService, CookiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
