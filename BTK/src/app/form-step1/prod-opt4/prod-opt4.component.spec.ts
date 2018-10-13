import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt4Component } from './prod-opt4.component';

describe('ProdOpt4Component', () => {
  let component: ProdOpt4Component;
  let fixture: ComponentFixture<ProdOpt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
