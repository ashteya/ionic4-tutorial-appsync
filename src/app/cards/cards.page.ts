import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CardDetailsPage } from '../card-details/card-details.page';
import { API, graphqlOperation } from "aws-amplify";

const listQuestions = `
query listQuestions($id: ID!) {
  getDeck(id: $id) {
    name
    cards {
      items {
        id
        question
      }
    }
  }
}
`;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  public deckId;
  public deck;

  constructor(private modalController: ModalController,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(p => { 
      this.deckId = p.id;
      this.getQuestions();
    });
  }

  getQuestions() {
    const query = API.graphql(graphqlOperation(listQuestions, { id: this.deckId })) as Promise<any>;

    query.then(res => {
      this.deck = res.data.getDeck;
    });
  }

  async showCard(card) {
    return this.loadModal(card);
  }

  async showNewCard() {
    return this.loadModal(null);
  }

  async loadModal(card) {
    const modal = await this.modalController.create({
      component: CardDetailsPage,
      componentProps: { 
        card: card,
        deck: { id: this.deckId }
      }
    });

    modal.onDidDismiss().then(() => this.getQuestions());

    return await modal.present();
  }
}