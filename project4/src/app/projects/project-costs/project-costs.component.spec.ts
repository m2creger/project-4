import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCostsComponent } from './project-costs.component';

describe('ProjectCostsComponent', () => {
  let component: ProjectCostsComponent;
  let fixture: ComponentFixture<ProjectCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
