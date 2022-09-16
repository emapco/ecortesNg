import {NgModule} from '@angular/core';

import {OatResearchPageComponent} from './oat-research-page.component';
import {MolViewerComponent} from '../../components/mol-viewer/mol-viewer.component';
import {BoraneResearchPageComponent} from './borane-research-page.component';
import {SharedModule} from "../../shared/shared.module";
import {ResearchRoutingModule} from "./research-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    OatResearchPageComponent,
    MolViewerComponent,
    BoraneResearchPageComponent,
  ],
  imports: [
    ResearchRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ResearchModule {
}
