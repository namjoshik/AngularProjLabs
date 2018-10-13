import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt7Component } from './prod-opt7.component';

describe('ProdOpt7Component', () => {
  let component: ProdOpt7Component;
  let fixture: ComponentFixture<ProdOpt7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
