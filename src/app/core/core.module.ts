import { NgModule } from '@angular/core';

import {MarkdownService} from "ngx-markdown";
import {CookiesService} from "./cookies.service";
import {MolDataService} from "./mol-data.service";
import {MatDialog} from "@angular/material/dialog";


@NgModule({
  providers: [
    MarkdownService,
    CookiesService,
    MolDataService,
    MatDialog,
  ],
})
export class CoreModule { }
