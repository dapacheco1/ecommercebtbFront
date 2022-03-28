import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditClothingComponent } from './modal-edit-clothing.component';

describe('ModalEditClothingComponent', () => {
  let component: ModalEditClothingComponent;
  let fixture: ComponentFixture<ModalEditClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditClothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
