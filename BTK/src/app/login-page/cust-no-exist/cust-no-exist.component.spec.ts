import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustNoExistComponent } from './cust-no-exist.component';

describe('CustNoExistComponent', () => {
  let component: CustNoExistComponent;
  let fixture: ComponentFixture<CustNoExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustNoExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustNoExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
