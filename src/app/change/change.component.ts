import { Component, OnInit } from '@angular/core';
import { Cards, CardsService} from "../cards.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  private _cardsService;
  constructor(CardsService: CardsService, private router: Router) {
    this._cardsService = CardsService;
  }
  incomingArticleObject :Cards[] = [];
  ngOnInit(){
    this.incomingArticleObject  = this._cardsService.getClickedCard();
  }
  goBack(){
    this.incomingArticleObject.splice(0, 1);
    this._cardsService.clearClicked();
    this.router.navigate(['']);
  }
  saveChange(){
      this._cardsService.saveChange(this.incomingArticleObject);
      this.router.navigate(['']);
      this.incomingArticleObject.splice(0,1);
  }
  removeCard(){
    this._cardsService.removeCard(this.incomingArticleObject[0].id);
    this.router.navigate(['']);
    this.incomingArticleObject.splice(0,1);
  }
  public showBlock = false
  showRemove(){
    this.showBlock = !this.showBlock;
  }

}
