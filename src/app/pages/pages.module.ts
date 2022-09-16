import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ResumePageComponent} from './resume-page/resume-page.component';
import {AppRoutingModule} from "../app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundComponent,
    ResumePageComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class PagesModule {
}
