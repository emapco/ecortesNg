import {Component, Inject, OnChanges, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
// @ts-ignore
import * as $3Dmol from '3dmol';
import {MolDataService} from "../../core/mol-data.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

// @ts-ignore
window["$"] = $;
// @ts-ignore
window["jQuery"] = $;
// @ts-ignore
window["$3Dmol"] = $3Dmol;

@Component({
  selector: 'app-mol-viewer',
  templateUrl: './mol-viewer.component.html',
  styleUrls: ['./mol-viewer.component.css']
})
export class MolViewerComponent implements OnInit {

  constructor(
    private molData: MolDataService,
    @Inject(MAT_DIALOG_DATA) public data: { folder: string, file: string }) {
  }

  async ngOnInit() {
    await this.init3Dmol(this.data.folder, this.data.file);
  }

  /**
   * Uses 3DMolJS library to display mol2 structure data
   * @param folder - folder to look for mol2 file
   * @param file - mol2 file name to be displayed
   */
  async init3Dmol(folder: string, file: string): Promise<void> {
    let displayElement = $('#container');
    // get mol data from file
    let mol2Data = await this.molData.get(folder, file);
    let config = {backgroundAlpha: 0};
    // create viewer on displayElement element and apply config style
    let viewer = $3Dmol.createViewer(displayElement, config);
    // add data to viewer
    viewer.addModel(mol2Data, "mol2");
    // customize the viewer
    viewer.setStyle({
      sphere: {scale: 1, opacity: 1, hidden: false, radius: .3},
      stick: {opacity: 1, radius: .1},
    });
    // zoom in on molecule and display it
    viewer.zoomTo();
    viewer.render();
    // set innerWidth otherwise WebGL canvas width is indeterminate
    displayElement.innerWidth(352);
  }
}
