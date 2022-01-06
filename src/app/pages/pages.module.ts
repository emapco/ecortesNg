import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PathVisualizerPageComponent} from "./path-visualizer-page/path-visualizer-page.component";
import { OatResearchPageComponent } from './research-page/oat-research-page.component';
import { MolViewerComponent } from './mol-viewer/mol-viewer.component';
import { BoraneResearchPageComponent } from './research-page/borane-research-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundComponent,
    PathVisualizerPageComponent,
    OatResearchPageComponent,
    MolViewerComponent,
    BoraneResearchPageComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HomePageComponent,
    PageNotFoundComponent,
    PathVisualizerPageComponent,
    OatResearchPageComponent,
    MolViewerComponent,
  ],
})
export class PagesModule {
}
