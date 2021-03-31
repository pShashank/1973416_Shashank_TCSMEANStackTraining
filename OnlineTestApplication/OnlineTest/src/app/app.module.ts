import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { LandingComponent } from './landing/landing.component';
import { TestAuthGuard } from './TestAuthGuard';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './quiz.service';
import { EndComponent } from './end/end.component'

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LandingComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestAuthGuard, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
