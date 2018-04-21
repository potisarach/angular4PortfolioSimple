import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../baseComponent';
import { UserModel } from '../../../shared/user.model';
declare var $:any;
@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent extends BaseComponent implements OnInit {

  @Input() action: string;
  public skill_name: string;

  constructor() { 
    super();

    this.skill_name = "MVC";
  }

  ngOnInit() {
    console.log("MVC");
    // this.bindModal();
  }
  // bindModal(){
  //   $('#skillFormModal').on();
  // }

}
