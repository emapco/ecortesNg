import { Component } from '@angular/core';
import {CookiesService} from "./shared/cookies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lightMode: boolean = false;

  constructor(private cookieService: CookiesService) {
    this.lightMode = this.cookieService.getMode();
    console.log(this.lightMode)
  }

  lightModeToggled(status: boolean) {
    this.lightMode = status;
    this.cookieService.setMode(this.lightMode);
    console.log(this.lightMode)
  }
}
