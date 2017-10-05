import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLaborComponent } from './project-labor.component';

describe('ProjectLaborComponent', () => {
  let component: ProjectLaborComponent;
  let fixture: ComponentFixture<ProjectLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
