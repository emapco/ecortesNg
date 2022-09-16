import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ResumePageComponent} from "./pages/resume-page/resume-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'resume',
    component: ResumePageComponent,
  },
  {
    path: 'research',
    loadChildren: () => import('./pages/research-page/research.module').then(m => m.ResearchModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects-page/projects.module').then(m => m.ProjectsModule)
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
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
