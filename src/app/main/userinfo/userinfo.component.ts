import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { BaseComponent } from '../../baseComponent';
declare var $:any;
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
   }
  ngOnInit() {
    console.log(this.user);
  }
  editUserInfo(){
    $('#userinfoFormModal').modal();
  }
}
