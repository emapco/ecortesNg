import {Component} from '@angular/core';
import {MolViewerComponent} from "../../components/mol-viewer/mol-viewer.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-borane-research-page',
  templateUrl: './borane-research-page.component.html',
  styleUrls: ['./research-pages.css']
})
export class BoraneResearchPageComponent {

  constructor(public dialog: MatDialog) {}

  async onClick(file: string) {
    let dialogRef = this.dialog.open(MolViewerComponent, {
      data: {folder: 'BActivation', file: file}
    });
  }
}
