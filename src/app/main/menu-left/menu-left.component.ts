import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';
import { UserModel } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent extends BaseComponent implements OnInit {

  constructor(public userService: UserService) {
    super();
   }

  ngOnInit() {
    
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
