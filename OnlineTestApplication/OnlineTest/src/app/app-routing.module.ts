import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { QuizComponent } from './quiz/quiz.component';
import { TestAuthGuard } from './TestAuthGuard';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  {path:"\start", component:LandingComponent},
  {path: "end", component:EndComponent},
  {path:"\quiz", component:QuizComponent, canActivate:[TestAuthGuard]},
  {path:"", redirectTo:"\start",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
