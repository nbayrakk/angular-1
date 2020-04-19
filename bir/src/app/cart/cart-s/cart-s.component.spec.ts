import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSComponent } from './cart-s.component';

describe('CartSComponent', () => {
  let component: CartSComponent;
  let fixture: ComponentFixture<CartSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
