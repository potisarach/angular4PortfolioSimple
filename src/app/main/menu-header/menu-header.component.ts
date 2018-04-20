import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../baseComponent';
import { UserModel } from '../../shared/user.model';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent extends BaseComponent implements OnInit {
  public headerTitle: string = 'My Portfolio';
  constructor(public user: UserModel, private route: Router) { 
    super();
  }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
    console.log('Do Logout');
  }
}
