import { Component, OnInit } from "@angular/core";
import { Card } from "../../../shared/models/card/card";
import { CardManagerService } from "../../services/card-manager.service";

@Component({
  selector: "app-notes-panel",
  imports: [],
  templateUrl: "./notes-panel.component.html",
  styleUrl: "./notes-panel.component.scss",
})
export class NotesPanelComponent implements OnInit {
  cards: Array<Card> = [];

  constructor(private CardManagerService: CardManagerService) {
  }
  
  ngOnInit(): void {
    this.CardManagerService.cards$.subscribe(cards =>
      this.cards = cards
    );
  }

  addCard(): boolean {
    let date = new Date().toDateString();
    let card = this.CardManagerService.createCard(date, "");
    return this.CardManagerService.addCard(card);
  }

  removeCard() {
    let id = 0;
    if(this.cards.length !== 0) {
      id = this.cards[0].id as number;
    }
    return this.CardManagerService.removeCard(id);
  }
}
