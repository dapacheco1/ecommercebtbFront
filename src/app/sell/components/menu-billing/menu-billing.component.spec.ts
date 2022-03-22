import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBillingComponent } from './menu-billing.component';

describe('MenuBillingComponent', () => {
  let component: MenuBillingComponent;
  let fixture: ComponentFixture<MenuBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
