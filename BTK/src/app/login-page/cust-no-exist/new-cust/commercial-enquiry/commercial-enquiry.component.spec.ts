import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialEnquiryComponent } from './commercial-enquiry.component';

describe('CommercialEnquiryComponent', () => {
  let component: CommercialEnquiryComponent;
  let fixture: ComponentFixture<CommercialEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
