import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';
import { UserModel } from '../../shared/user.model';
declare var $:any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends BaseComponent implements OnInit {

  public action: string;
  constructor(public user: UserModel) {
    super();
   }

  ngOnInit() {
  }
  addSkills(){
    this.action = 'add';
    $('#skillFormModal').modal();
  }
  editSkills(){
    this.action = 'edit';
    $('#skillFormModal').modal();
  }
  deleteSkills(){
    $('#deleteSkillFormModal').modal();
  }

}
