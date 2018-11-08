import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cards/:id', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'card-details', loadChildren: './card-details/card-details.module#CardDetailsPageModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
