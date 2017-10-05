import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEquipmentComponent } from './project-equipment.component';

describe('ProjectEquipmentComponent', () => {
  let component: ProjectEquipmentComponent;
  let fixture: ComponentFixture<ProjectEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
