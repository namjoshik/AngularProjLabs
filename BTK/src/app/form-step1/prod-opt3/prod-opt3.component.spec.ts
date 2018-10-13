import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt3Component } from './prod-opt3.component';

describe('ProdOpt3Component', () => {
  let component: ProdOpt3Component;
  let fixture: ComponentFixture<ProdOpt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
