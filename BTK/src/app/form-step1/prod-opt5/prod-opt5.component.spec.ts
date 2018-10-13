import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOpt5Component } from './prod-opt5.component';

describe('ProdOpt5Component', () => {
  let component: ProdOpt5Component;
  let fixture: ComponentFixture<ProdOpt5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOpt5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOpt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
