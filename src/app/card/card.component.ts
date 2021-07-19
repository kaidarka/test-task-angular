import {Component, NgModule, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

export interface Cards {
  title: string;
  text: string;
}



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardList: Cards[] = [
  ]
  inputTitle = "";
  inputText = "";
  addCard(inputTitle: string, inputText: string){
    this.cardList.push({title: inputTitle, text: inputText});
  }
  removeCard(i: number){
    if (i > -1){
      this.cardList.splice(i, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {

  }

}
