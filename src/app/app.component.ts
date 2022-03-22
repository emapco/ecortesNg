import { Component } from '@angular/core';
import {CookiesService} from "./core/cookies.service";
import {OverlayContainer} from "@angular/cdk/overlay";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLightMode: boolean = false;

  constructor(private cookieService: CookiesService,
              private overlayContainer: OverlayContainer,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.lightModeToggled(this.cookieService.getMode());

    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/github.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/linkedin.svg'
      )
    );
  }

  lightModeToggled(status: boolean) {
    this.isLightMode = status;
    this.cookieService.setMode(this.isLightMode);
    // set overlay component (MatDialog) theme
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    if (this.isLightMode) {
      overlayContainerClasses.remove('dark-theme');
    } else {
      overlayContainerClasses.add('dark-theme');
    }
  }
}
