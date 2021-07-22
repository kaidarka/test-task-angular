import {Injectable} from "@angular/core";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export interface Cards {
  id: number;
  title: string;
  text: string;
}

export class CardsService{
  cards: Cards[] = [
    {id: 0, title: 'title', text: 'text'}
  ];
  public getAll() {
    return this.cards;
  }

  public removeCard(id: number){
    return this.cards = this.cards.filter(card => card.id !== id);
  }
  clickedCard : Cards[] = [];

  public addCard(){
    this.clickedCard.push({id: this.cards.length,title: "", text: ""});
  }
  public setClickedCardObj(obj: any){

    this.clickedCard.push(obj);
  }

  public getClickedCard(){
    return this.clickedCard;
  }
  public clearClicked(){
    this.clickedCard.splice(0, 1);
  }
  public saveChange(card: any){
    if (this.cards[card[0].id]){
      this.cards[card.id] = card;
    } else {
      this.cards.push(card[0]);
    }

  }
}
