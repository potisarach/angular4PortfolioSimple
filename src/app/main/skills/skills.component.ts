import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';
declare var $:any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }
  addSkills(){
    $('#skillFormModal').modal();
  }

}
