import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
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
              private router: Router,
              private alertController: AlertController) {
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

  async promptQuiz() {
    const alert = await this.alertController.create({
      header: 'Which cards?',
      inputs: [
        {
          name: 'filter',
          type: 'text',
          placeholder: 'Type a word to filter the cards'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Start Quiz',
          handler: async data => {
            console.log(data.filter);
            await this.startQuiz(data.filter);
          }
        }
      ]
    });

    await alert.present();
  }

  async startQuiz(filter) {
    const modal = await this.modalController.create({
      component: QuizPage,
      componentProps: { filter }
    });
    return await modal.present();
  }
}