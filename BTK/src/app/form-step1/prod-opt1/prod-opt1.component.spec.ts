import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt1Component } from './prod-opt1.component';

describe('ProdOpt1Component', () => {
  let component: ProdOpt1Component;
  let fixture: ComponentFixture<ProdOpt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
