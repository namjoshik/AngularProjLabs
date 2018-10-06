import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCompanyComponent } from './registered-company.component';

describe('RegisteredCompanyComponent', () => {
  let component: RegisteredCompanyComponent;
  let fixture: ComponentFixture<RegisteredCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
