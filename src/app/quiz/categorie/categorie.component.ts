import { Component } from '@angular/core';
import { CategorieService } from 'src/app/shared/services/categorie.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent {
  categorie: any;
  answer: any;
  questionId: number = 0;
  j : string = "";

  getAnswerLetter(letter: string){
    return letter;
  }

  RechercheCateg(){

  }

  isQuizFinished(){

  }

  addAnswer(answerLabel: string, questionId: number) {

  }

  isAnswerSelected(answerLabel: string, questionId: number){

  }

  constructor(
    private categorieService: CategorieService,
    private router: Router,
    private route: ActivatedRoute
    ) { };
}