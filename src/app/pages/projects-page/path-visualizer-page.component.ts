import {Component} from '@angular/core';
import {pathfinding_set, ResponsiveImageOutput} from "../srcset";

@Component({
  selector: 'app-path-visualizer-page',
  templateUrl: './path-visualizer-page.component.html',
})
export class PathVisualizerPageComponent {
  pathfinding_set: ResponsiveImageOutput = pathfinding_set;
  constructor() { }
}
