import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBillingComponent } from './base-billing.component';

describe('BaseBillingComponent', () => {
  let component: BaseBillingComponent;
  let fixture: ComponentFixture<BaseBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
