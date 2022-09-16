import {Component} from '@angular/core';
import {
  dashboard_set,
  ml_api_client_set,
  mobile_synth_set,
  pathfinding_set,
  ResponsiveImageOutput,
  synth_set,
  todolist_set,
} from "../srcset";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  dashboard_set: ResponsiveImageOutput = dashboard_set;
  todolist_set: ResponsiveImageOutput = todolist_set;
  ml_api_client_set: ResponsiveImageOutput = ml_api_client_set;
  mobile_synth_set: ResponsiveImageOutput = mobile_synth_set;
  pathfinding_set: ResponsiveImageOutput = pathfinding_set;
  synth_set: ResponsiveImageOutput = synth_set;

  constructor() {
  }
}
