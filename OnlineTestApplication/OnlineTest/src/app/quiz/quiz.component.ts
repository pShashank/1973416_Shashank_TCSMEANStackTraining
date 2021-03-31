import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from '../question.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  questions:Array<Questions> = [];
  @Output() outputFromChild: EventEmitter<any> = new EventEmitter<any>()
  constructor(public qSer:QuizService, public router:Router) { }

  ngOnInit(): void {
    this.qSer.loadQuestionData().subscribe(result=>this.questions = result)
  }

  onSelectionChange(index:number, option:string){
    console.log(index+" -> "+option);
    this.questions[index].selection =  option;
  }
  onSubmit(){
    this.qSer.saveResults(this.questions)
    sessionStorage.removeItem("token");
    this.router.navigate(["end"]);
  }

}
