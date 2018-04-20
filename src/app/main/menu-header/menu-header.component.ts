import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../baseComponent';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent extends BaseComponent implements OnInit {
  public headerTitle: string = 'My Portfolio';
  constructor(private route: Router) { 
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
