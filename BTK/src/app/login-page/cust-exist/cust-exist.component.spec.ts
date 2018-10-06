import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustExistComponent } from './cust-exist.component';

describe('CustExistComponent', () => {
  let component: CustExistComponent;
  let fixture: ComponentFixture<CustExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
