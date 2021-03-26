import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  });
  msg:string = "";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  portfolioPage(){
    let user1 = this.loginRef.get("user")?.value;
    let pass1 = this.loginRef.get("pass")?.value;
    let uname = sessionStorage.getItem("uname");
    let pass = sessionStorage.getItem("pass");
    if(uname == ""){
      this.msg = "Login Failed, Please Try Again";
    }
    else{
      if(user1==uname && pass1==pass){
        sessionStorage.setItem("token", "123")
        this.router.navigate(["portfolio"]);
      }else{
        this.msg = "Login Failed, Please Try Again";
      }
    }
    
  }
  registerationPage(){
    this.router.navigate(["signup"]);
  }

}
