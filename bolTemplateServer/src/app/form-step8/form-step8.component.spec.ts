import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep8Component } from './form-step8.component';

describe('FormStep8Component', () => {
  let component: FormStep8Component;
  let fixture: ComponentFixture<FormStep8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStep8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStep8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
