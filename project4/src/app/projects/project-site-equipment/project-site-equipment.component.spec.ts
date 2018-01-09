import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSiteEquipmentComponent } from './project-site-equipment.component';

describe('ProjectSiteEquipmentComponent', () => {
  let component: ProjectSiteEquipmentComponent;
  let fixture: ComponentFixture<ProjectSiteEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSiteEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSiteEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
