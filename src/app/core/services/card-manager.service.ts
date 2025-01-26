import { Injectable } from "@angular/core";
import { Card } from "../../shared/models/card/card";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CardManagerService {
  public cards$: Observable<Card[]>;

  private cardsSubject: BehaviorSubject<Card[]>;
  private idCounter: number = 1;

  constructor() {
    this.cardsSubject = new BehaviorSubject<Card[]>([]);
    this.cards$ = this.cardsSubject.asObservable();

    for (let i = this.idCounter; i < this.idCounter + 7; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      let card = this.createCard(currentDate.toDateString(), `${i}`);
      this.addCard(card);
    }
  }

  createCard(title: string, content: string): Card {
    const card: Card = {
      id: this.idCounter++,
      title,
      content
    };
    return card;
  }

  addCard(card: Card): boolean {
    const currentCards = this.cardsSubject.value;

    if (!currentCards.some((existingCard) => existingCard.id === card.id)) {
      this.cardsSubject.next([...currentCards, card]);
      return true;
    } else {
      return false;
    }
  }

  getCard(id: number): Card | undefined {
    return this.cardsSubject.value.find(
      (existingCard) => existingCard.id === id
    );
  }

  removeCard(id: number): void {
    const currentCards = this.cardsSubject.value;
    if(currentCards.length !== 0) {
      const updatedCards = currentCards.filter((card) => card.id !== id);
      this.cardsSubject.next(updatedCards);
    }
  }
}
