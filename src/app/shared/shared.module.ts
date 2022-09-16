import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MarkdownModule} from "ngx-markdown";
import {PictureComponent} from "../components/picture/picture.component";


@NgModule({
  declarations: [
    PictureComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MarkdownModule,
    PictureComponent
  ],
})
export class SharedModule {
}
