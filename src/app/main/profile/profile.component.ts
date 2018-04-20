import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {

  }
  
}
