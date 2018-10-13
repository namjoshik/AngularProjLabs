import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt8Component } from './prod-opt8.component';

describe('ProdOpt8Component', () => {
  let component: ProdOpt8Component;
  let fixture: ComponentFixture<ProdOpt8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
