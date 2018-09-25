import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep6Component } from './form-step6.component';

describe('FormStep6Component', () => {
  let component: FormStep6Component;
  let fixture: ComponentFixture<FormStep6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStep6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
