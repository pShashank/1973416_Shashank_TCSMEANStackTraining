import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineTest';
}


// template: '<app-quiz [questions] = "questions" (outputFromChild)= "updateData($event)"></app-quiz><app-end [questionsFromChild] = "questions"></app-end>',
