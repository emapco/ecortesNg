import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ProjectsPageComponent} from "./projects-page.component";
import {PathVisualizerPageComponent} from "./path-visualizer-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'pathfindingVisualizer',
    component: PathVisualizerPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
