import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {BoraneResearchPageComponent} from "./borane-research-page.component";
import {OatResearchPageComponent} from "./oat-research-page.component";

const routes: Routes = [
  {
    path: 'borane-activation-research',
    component: BoraneResearchPageComponent,
  },
  {
    path: 'oat-research',
    component: OatResearchPageComponent,
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
export class ResearchRoutingModule {
}
