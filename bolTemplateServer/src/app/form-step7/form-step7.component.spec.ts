import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep7Component } from './form-step7.component';

describe('FormStep7Component', () => {
  let component: FormStep7Component;
  let fixture: ComponentFixture<FormStep7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStep7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
