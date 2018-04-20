import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../baseComponent';
declare var $:any;
@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent extends BaseComponent implements OnInit {
  public action: string;
  constructor() {
    super();
   }

  ngOnInit() {
  }
  addExp(){

    $('#expFormModal').modal();
  }

}
