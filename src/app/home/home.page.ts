import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { QuizPage } from '../quiz/quiz.page';

import { API, graphqlOperation } from "aws-amplify";

const listDeckNames = `
query listDeckNames {
  listDecks {
    items {
      id
      name
    }
  }
}
`;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public decks;

  constructor(private modalController: ModalController,
              private router: Router) {
  }

  ngOnInit() {
    const query = API.graphql(graphqlOperation(listDeckNames)) as Promise<any>;

    query.then(res => {
      this.decks = res.data.listDecks.items;
    });
  }

  showCards(deck) {
    this.router.navigate(['/cards', deck.id]);
  }

  async startQuiz() {
      const modal = await this.modalController.create({
        component: QuizPage
      });
      return await modal.present();
  }
}