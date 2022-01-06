import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "../pages/page-not-found/page-not-found.component";
import {PathVisualizerPageComponent} from "../pages/path-visualizer-page/path-visualizer-page.component";
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {OatResearchPageComponent} from "../pages/research-page/oat-research-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'pathfindingVisualizer',
    component: PathVisualizerPageComponent
  },
  {
    path: 'oat-research',
    component: OatResearchPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
