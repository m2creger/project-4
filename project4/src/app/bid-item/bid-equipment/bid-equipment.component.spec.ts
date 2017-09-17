import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidEquipmentComponent } from './bid-equipment.component';

describe('BidEquipmentComponent', () => {
  let component: BidEquipmentComponent;
  let fixture: ComponentFixture<BidEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
