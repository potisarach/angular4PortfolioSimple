import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workexperience-form',
  templateUrl: './workexperience-form.component.html',
  styleUrls: ['./workexperience-form.component.css']
})
export class WorkexperienceFormComponent implements OnInit {
  public arrays = ["2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"];

  constructor() { }

  ngOnInit() {
  }

}
