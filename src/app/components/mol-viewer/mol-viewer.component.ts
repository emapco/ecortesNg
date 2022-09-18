import {Component, Inject, OnInit} from '@angular/core';

// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";
import {MolDataService} from "../../core/mol-data.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

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
    let displayElement = document.querySelector('#container');
    // get mol data from file
    let mol2Data = await this.molData.get(folder, file);
    let config = {backgroundColor: "#424242"};

    // create viewer on displayElement element and apply config style
    let viewer = $3Dmol.createViewer(displayElement, config);

    // add structure data to the viewer
    viewer.addModel(mol2Data, "mol2");

    // add atom labels to molecule structure
    addAtomLabels(mol2Data, viewer);

    // customize the viewer
    viewer.setStyle({
      sphere: {scale: 1, opacity: 1, hidden: false, radius: .3},
      stick: {opacity: 1, radius: .1},
    });

    // zoom in on molecule and display it
    viewer.zoomTo();
    viewer.render();

    // determine appropriate canvas width depending on window size
    let aspect_ratio = window.innerWidth / window.innerHeight;
    let c_width = 352;
    if (window.innerWidth > 560) {
      c_width = window.innerWidth / 2;
    }

    // set innerWidth otherwise WebGL canvas width is indeterminate
    // @ts-ignore
    displayElement.innerWidth(c_width);
    // @ts-ignore
    displayElement.innerHeight(c_width/aspect_ratio);
  }
}

function addAtomLabels(data: string, viewer: any): void {
  const atomHeader = '@<TRIPOS>ATOM';
  const bondHeader = '@<TRIPOS>BOND';
  let isAtomSection = false;

  let splitData: string[] = data.split('\n');
  splitData.forEach((elem) => {
    if (elem === atomHeader) {
      isAtomSection = true;
    } else if (elem === bondHeader) {
      isAtomSection = false;
    } else if (isAtomSection) {
      // @ts-ignore
      let label = elem.match(/[A-Za-z]+/)[0] // get the first alphabetic sequence
      let coords = elem.match(/[+-]?[0-9]*[.][0-9]+/g) // get all floats
      // @ts-ignore
      // first three values are the x, y, z coordinates
      let coordinate = new Coordinate(Number(coords[0]), Number(coords[1]), Number(coords[2]));

      // add label to viewer
      viewer.addLabel(label, {position:coordinate, alignment:"center", frame:0,
        showBackground:false, fontSize:8, fontColor:'black', fontOpacity:1})
    }
  });
}

class Coordinate {
  public readonly x: number;
  public readonly  y: number;
  public readonly  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
