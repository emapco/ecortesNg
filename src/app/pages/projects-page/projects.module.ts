import {NgModule} from '@angular/core';

import {ProjectsRoutingModule} from "./projects-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ProjectsPageComponent} from "./projects-page.component";
import {PathVisualizerPageComponent} from "./path-visualizer-page.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ProjectsPageComponent,
    PathVisualizerPageComponent,
  ],
  imports: [
    ProjectsRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ProjectsModule {
}
