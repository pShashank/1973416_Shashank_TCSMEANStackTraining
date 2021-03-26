import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  regRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    uname: new FormControl(),
    pass: new FormControl()
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  onRegister(){
    sessionStorage.setItem("uname", this.regRef.get("uname")?.value)
    sessionStorage.setItem("pass", this.regRef.get("pass")?.value)
  }
  logout(){
    this.router.navigate(["login"]);
  }

}
