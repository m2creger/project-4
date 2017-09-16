import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidItemComponent } from './bid-item.component';

describe('BidItemComponent', () => {
  let component: BidItemComponent;
  let fixture: ComponentFixture<BidItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
