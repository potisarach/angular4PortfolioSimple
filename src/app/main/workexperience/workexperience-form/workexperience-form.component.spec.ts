import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperienceFormComponent } from './workexperience-form.component';

describe('WorkexperienceFormComponent', () => {
  let component: WorkexperienceFormComponent;
  let fixture: ComponentFixture<WorkexperienceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkexperienceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
