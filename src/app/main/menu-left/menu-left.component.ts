import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';
import { UserModel } from '../../shared/user.model';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent extends BaseComponent implements OnInit {

  constructor(private user: UserModel) {
    super(user);
   }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("container").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   // document.getElementById("container").style.marginLeft = "0";
  }

}
