import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidMaterialComponent } from './bid-material.component';

describe('BidMaterialComponent', () => {
  let component: BidMaterialComponent;
  let fixture: ComponentFixture<BidMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
