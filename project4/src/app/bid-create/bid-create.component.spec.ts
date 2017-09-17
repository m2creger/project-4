import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidCreateComponent } from './bid-create.component';

describe('BidCreateComponent', () => {
  let component: BidCreateComponent;
  let fixture: ComponentFixture<BidCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
