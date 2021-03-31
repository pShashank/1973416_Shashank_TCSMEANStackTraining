import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from '../question.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  // result:Array<Questions> = [];
  questionsFromChild:Array<Questions> = [];
  correct:number = 0;
  total:number = 0;
  result:string = ""
  constructor(public qSer:QuizService, public router:Router) { }

  ngOnInit(): void {
    // this.qSer.dataSource.subscribe((data)=>{this.result=data});
    this.questionsFromChild = this.qSer.result;
    this.getScore();
    // console.log(this.questionsFromChild);
  }
  
  getScore(){
    this.total = this.questionsFromChild.length
    for(let i=0; i< this.total; i++){
      if(this.questionsFromChild[i].selection == this.questionsFromChild[i].solution){
        this.correct++;
      }
    }
    if(this.correct >= 2){
      this.result = "Pass"
    }
    else{
      this.result = "Fail"
    }
  }


}
 