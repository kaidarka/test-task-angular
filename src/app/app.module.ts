import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import {ChangeComponent} from "./change/change.component";
import {RouterModule} from "@angular/router";
import {CardsService} from "./cards.service";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ChangeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule
    ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
