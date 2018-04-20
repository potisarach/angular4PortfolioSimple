import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../baseComponent';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent extends BaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
