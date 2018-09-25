import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep5Component } from './form-step5.component';

describe('FormStep5Component', () => {
  let component: FormStep5Component;
  let fixture: ComponentFixture<FormStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
