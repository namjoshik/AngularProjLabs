import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt9Component } from './prod-opt9.component';

describe('ProdOpt9Component', () => {
  let component: ProdOpt9Component;
  let fixture: ComponentFixture<ProdOpt9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
