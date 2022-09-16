import {Component} from '@angular/core';
import {headshot_set} from "../srcset";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  headshot_set: any = headshot_set;
  constructor() {
  }
}
