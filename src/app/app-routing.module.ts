import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ChangeComponent} from "./change/change.component";
import {CardComponent} from "./card/card.component";


const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "change", component: ChangeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
