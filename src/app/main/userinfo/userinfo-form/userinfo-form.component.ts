import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../baseComponent';

@Component({
  selector: 'app-userinfo-form',
  templateUrl: './userinfo-form.component.html',
  styleUrls: ['./userinfo-form.component.css']
})
export class UserinfoFormComponent extends BaseComponent implements OnInit {

  public firstname: string;
  public lastname: string;
  public introduce: string;
  public titlename: string;

  constructor() { 
    super();
    
    this.firstname = this.user.firstname;
    this.lastname = this.user.lastname;
    this.introduce = this.user.introduce;
    this.titlename = this.user.titlename;

  }
  ngOnInit() {
    console.log(this.user);
  }

}
