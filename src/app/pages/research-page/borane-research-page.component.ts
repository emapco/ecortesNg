import {Component} from '@angular/core';
import {MolViewerComponent} from "../../components/mol-viewer/mol-viewer.component";
import {MatDialog} from "@angular/material/dialog";
import {
  homo16_set,
  homo1_set,
  odc_pi1_set,
  odc_pi2_set,
  odhf_pi1_set,
  odhf_pi2_set,
  oi_lp_set,
  oi_pi_set,
  ResponsiveImageOutput
} from "../srcset";

@Component({
  selector: 'app-borane-research-page',
  templateUrl: './borane-research-page.component.html',
  styleUrls: ['./research-pages.css']
})
export class BoraneResearchPageComponent {
  homo1_set: ResponsiveImageOutput = homo1_set;
  homo16_set: ResponsiveImageOutput = homo16_set;
  odc_pi1_set: ResponsiveImageOutput = odc_pi1_set;
  odc_pi2_set: ResponsiveImageOutput = odc_pi2_set;
  odhf_pi1_set: ResponsiveImageOutput = odhf_pi1_set;
  odhf_pi2_set: ResponsiveImageOutput = odhf_pi2_set;
  oi_lp_set: ResponsiveImageOutput = oi_lp_set;
  oi_pi_set: ResponsiveImageOutput = oi_pi_set;

  constructor(public dialog: MatDialog) {
  }

  async onClick(file: string) {
    let dialogRef = this.dialog.open(MolViewerComponent, {
      data: {folder: 'BActivation', file: file}
    });
  }
}
