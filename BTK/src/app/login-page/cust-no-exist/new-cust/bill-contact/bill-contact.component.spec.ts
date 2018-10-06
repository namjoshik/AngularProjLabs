import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillContactComponent } from './bill-contact.component';

describe('BillContactComponent', () => {
  let component: BillContactComponent;
  let fixture: ComponentFixture<BillContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
