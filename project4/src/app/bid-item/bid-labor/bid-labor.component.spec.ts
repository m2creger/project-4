import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidLaborComponent } from './bid-labor.component';

describe('BidLaborComponent', () => {
  let component: BidLaborComponent;
  let fixture: ComponentFixture<BidLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidLaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
