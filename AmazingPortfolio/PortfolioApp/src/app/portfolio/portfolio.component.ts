import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  portfolioRef = new FormGroup({
    name: new FormControl(),
    phone: new FormControl()
  });
  contacts:Array<Contact> = [];
  username:string = "";
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.username =  sessionStorage.getItem("uname") || "";
  }

  insertNewRecord(){
    let contact = new Contact(this.portfolioRef.get("name")?.value,this.portfolioRef.get("phone")?.value)
    this.contacts.push(contact)
  }
  logout(){
    sessionStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

}
