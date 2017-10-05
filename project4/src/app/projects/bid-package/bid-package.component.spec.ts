import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidPackageComponent } from './bid-package.component';

describe('BidPackageComponent', () => {
  let component: BidPackageComponent;
  let fixture: ComponentFixture<BidPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
