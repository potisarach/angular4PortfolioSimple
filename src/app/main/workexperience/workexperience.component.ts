import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';
import { UserModel } from '../../shared/user.model';
declare var $:any;
@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent extends BaseComponent implements OnInit {
  public action: string;
  constructor(public user: UserModel) {
    super();
   }

  ngOnInit() {
  }
  addExp(){

    $('#expFormModal').modal();
  }
  editExperien(){
    
        $('#expFormModal').modal();
      }

}
