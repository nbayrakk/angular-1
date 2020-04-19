import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprodComponent } from './infoprod.component';

describe('InfoprodComponent', () => {
  let component: InfoprodComponent;
  let fixture: ComponentFixture<InfoprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
