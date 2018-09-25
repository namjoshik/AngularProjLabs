import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep4Component } from './form-step4.component';

describe('FormStep4Component', () => {
  let component: FormStep4Component;
  let fixture: ComponentFixture<FormStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
