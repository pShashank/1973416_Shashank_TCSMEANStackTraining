import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioAuthGuard } from './portfolioAuthGuard';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  {path:"\login", component:LoginPageComponent},
  {path:"\signup", component:RegistrationPageComponent},
  {path: "\portfolio", component:PortfolioComponent,canActivate:[PortfolioAuthGuard]},
  {path:"", redirectTo:"\login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
