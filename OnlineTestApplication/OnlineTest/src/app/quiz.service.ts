import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Questions } from './question.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  // private arraySource = new BehaviorSubject('array');
  public result:Array<Questions> = [];
  constructor(public http:HttpClient) { }
  loadQuestionData():Observable<Questions[]>{
    return this.http.get<Questions[]>("/assets/Questions.JSON");
  }
  saveResults(res:Array<Questions>){
    this.result = res;
  }
}
