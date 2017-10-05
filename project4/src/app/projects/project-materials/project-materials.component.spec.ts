import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaterialsComponent } from './project-materials.component';

describe('ProjectMaterialsComponent', () => {
  let component: ProjectMaterialsComponent;
  let fixture: ComponentFixture<ProjectMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
