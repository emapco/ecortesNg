import {Component, Input} from '@angular/core';
import {ResponsiveImageOutput} from "../../pages/srcset";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
})
export class PictureComponent {
  @Input() resImg: ResponsiveImageOutput | any = {};
  @Input() sizes: string = '(min-width: 1921px) 1920px, (min-width: 1920px) 1580px, (min-width: 1580px) 1024px, ' +
    '(min-width: 400px) 600px, (max-width: 400px) 300px';
  @Input() lazyLoad: boolean = true;
  @Input() alt: string = '';
  @Input() class: string = '';
  @Input() width: string = '400';
  @Input() height: string = '300';

  constructor() {
  }
}
