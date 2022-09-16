import {Component, Input} from '@angular/core';
import {ResponsiveImageOutput} from "../../pages/srcset";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
})
export class PictureComponent {
  @Input() resImg: ResponsiveImageOutput | any = {};
  @Input() sizes: string = '(min-width: 1920px) 1920px (min-width: 1580px) 1024px (min-width: 1024px) 800px ' +
    '(min-width: 600px) 450px (min-width: 1px) 300px';
  @Input() loading: string = 'lazy';
  @Input() alt: string = '';
  @Input() class: string = '';

  constructor() {
  }
}
