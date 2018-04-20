import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  public headerTitle: string = 'My Portfolio';
  constructor(private route: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
    console.log('Do Logout');
  }
}
