import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PathVisualizerPageComponent} from "./path-visualizer-page/path-visualizer-page.component";


@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundComponent,
    PathVisualizerPageComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HomePageComponent,
    PageNotFoundComponent,
    PathVisualizerPageComponent,
  ],
})
export class PagesModule {
}
