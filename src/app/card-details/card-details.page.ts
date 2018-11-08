import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { API, graphqlOperation } from "aws-amplify";

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
              private navParams: NavParams)  { }

  ngOnInit() {
    this.card = this.navParams.get('card');
    this.deck = this.navParams.get('deck');

    if (!this.card) {
      this.isNew = true;
      this.card = { question: '', answer: '' };
    }
    else {
      const query = API.graphql(graphqlOperation(getAnswer, { id: this.card.id })) as Promise<any>;

      query.then(res => {
        this.card.answer = res.data.getCard.answer;
      });
    }
  }

  delete() {
    this.modalController.dismiss();
  }
  
  save() {
    this.modalController.dismiss();
  }
}