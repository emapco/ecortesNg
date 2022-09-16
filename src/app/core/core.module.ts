import { NgModule } from '@angular/core';

import {MarkdownService} from "ngx-markdown";
import {MolDataService} from "./mol-data.service";
import {MatDialog} from "@angular/material/dialog";


@NgModule({
  providers: [
    MarkdownService,
    MolDataService,
    MatDialog,
  ],
})
export class CoreModule { }
