import {Component, Inject, OnChanges, OnInit} from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data: { folder: string, file: string }) {}

  async ngOnInit() {
    await this.init3Dmol(this.data.folder, this.data.file);
    // change innerWidth otherwise webGL canvas width is indeterminate
    $('#container').innerWidth(352);
  }

  async init3Dmol(folder: string, file: string): Promise<void> {
    // get mol data from file
    let mol2Data = await this.molData.get(folder, file);

    let config = {backgroundAlpha: 0};
    let viewer = $3Dmol.createViewer("container", config);
    viewer.addModel(mol2Data, "mol2");
    viewer.setStyle({
      sphere: {scale: 1, opacity: 1, hidden: false, radius: .3},
      stick: {opacity: 1, radius: .1},
    });
    viewer.zoomTo();
    viewer.resize();
    viewer.render();
    //await this.initMol(viewer, mol2DataValue);
  }

  async initMol(viewer: any, mol2Data: String): Promise<void> {
    viewer.addModel(mol2Data, "mol2");
    /*
    let atomLabels = this.getAtomLabels(mol2Data);
    let i;
    for (i = 0; i < atomLabels.length; i++) {
      let atomWithLabel = atomLabels[i];
      viewer.addLabel(atomWithLabel.label, {
        position: atomWithLabel.atom.coord,
        backgroundColor: 0xff0000,
        backgroundOpacity: 0.8
      });
    }
     */
    viewer.setStyle({
      sphere: {scale: 1, opacity: 1, hidden: false, radius: .3},
      stick: {opacity: 1, radius: .1},
    });
    viewer.zoomTo();
    viewer.render();
    viewer.resize();
  };

  getAtomLabels(sdfData: String): Array<AtomLabel> {
    let atoms = [];
    let lines = sdfData.split(/\r?\n|\r/);
    let atomCount = parseInt(lines[3].slice(0, 3));
    let bondCount = parseInt(lines[3].slice(3, 3));

    let i, line;
    for (i = 4; i < 4 + atomCount; i++) {
      line = lines[i];
      let elem = line.slice(31, 3).replace(/ /g, "");

      let atom = new Atom(
        elem[0].toUpperCase() + elem.slice(1).toLowerCase(),
        new Coordinate(
          parseFloat(line.slice(0, 10)),
          parseFloat(line.slice(10, 10)),
          parseFloat(line.slice(20, 10))
        )
      );
      atoms.push(atom);
    }

    let atomLabels = [];
    for (i = 4 + atomCount + bondCount; i < lines.length; i++) {
      line = lines[i];
      if (line.startsWith("A")) {
        let parts = line.split(/\s+/);
        let atomSerial = parseInt(parts[1]);
        let atomWithLabel = new AtomLabel(lines[i + 1], atoms[atomSerial - 1]);
        i++;
        atomLabels.push(atomWithLabel);
      }
    }
    return atomLabels;
  };

}

class Coordinate {
  constructor(public x: number, public y: number, public z: number) {
  }
}

class Atom {
  constructor(public atom: String, public coord: Coordinate) {
  }
}

class AtomLabel {
  constructor(public label: String, public atom: Atom) {
  }
}
