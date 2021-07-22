import {Component, NgModule, OnInit} from '@angular/core';
import {Cards, CardsService} from "../cards.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private _cardsService;
  public cards: Cards[] = [];

  constructor(CardsService: CardsService, private router: Router) {
    this._cardsService = CardsService;

  }

  ngOnInit(): void {
    this.cards = this._cardsService.getAll();

  }
  addCard(){
    this._cardsService.addCard();
    this.router.navigate(['change']);
  }
  goToCard(article: any){
    this._cardsService.setClickedCardObj(article);
    this.router.navigate(['change']);
  }

}
