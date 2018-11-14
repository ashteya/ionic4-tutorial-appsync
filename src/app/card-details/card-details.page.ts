import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { API, graphqlOperation } from "aws-amplify";
import { APIService } from '../api.service';

const getAnswer = `
query getAnswer($id: ID!) {
  getCard(id: $id) {
    answer
  }
}
`;

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  public card;
  public deck;
  public isNew = false;

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private apiService: APIService)  { }

  ngOnInit() {
    this.deck = this.navParams.get('deck');
    const card = this.navParams.get('card');
    
    if (!card) {
      this.isNew = true;
      this.card = {};
    }
    else {
      this.card = Object.assign({}, card);

      const query = API.graphql(graphqlOperation(getAnswer, { id: this.card.id })) as Promise<any>;

      query.then(res => {
        this.card.answer = res.data.getCard.answer;
      });
    }
  }

  delete() {
    if (!this.isNew) {
      this.apiService.DeleteCard({
        id: this.card.id
      });
    }

    this.modalController.dismiss();
  }
  
  save() {
    if (this.isNew) {
      this.apiService.CreateCard({
        cardDeckId: this.deck.id,
        question: this.card.question,
        answer: this.card.answer
      })
    } 
    else {
      this.apiService.UpdateCard({
        id: this.card.id,
        question: this.card.question,
        answer: this.card.answer
      })
    }

    this.modalController.dismiss();
  }
}