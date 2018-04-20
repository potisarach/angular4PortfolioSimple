import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';
import { UserModel } from '../../shared/user.model';
declare var $:any;
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent extends BaseComponent implements OnInit {

  constructor(public user: UserModel) {
    super();
    this.user = JSON.parse(localStorage.getItem('user')); 
   }
  ngOnInit() {
    console.log(this.user);
  }
  editUserInfo(){
    $('#userinfoFormModal').modal();
  }
}
