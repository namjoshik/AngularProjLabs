import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt6Component } from './prod-opt6.component';

describe('ProdOpt6Component', () => {
  let component: ProdOpt6Component;
  let fixture: ComponentFixture<ProdOpt6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
