import { Component } from '@angular/core';
import {CookiesService} from "./core/cookies.service";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLightMode: boolean = false;

  constructor(private cookieService: CookiesService,
              private overlayContainer: OverlayContainer) {
    this.lightModeToggled(this.cookieService.getMode());
  }

  lightModeToggled(status: boolean) {
    this.isLightMode = status;
    this.cookieService.setMode(this.isLightMode);
    // set overlay component (MatDialog) theme
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    if (this.isLightMode) {
      overlayContainerClasses.remove('dark-theme');
      overlayContainerClasses.add('light-theme');
    } else {
      overlayContainerClasses.remove('light-theme');
      overlayContainerClasses.add('dark-theme');
    }
  }
}
