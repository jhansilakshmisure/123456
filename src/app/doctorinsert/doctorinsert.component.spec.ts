import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorinsertComponent } from './doctorinsert.component';

describe('DoctorinsertComponent', () => {
  let component: DoctorinsertComponent;
  let fixture: ComponentFixture<DoctorinsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorinsertComponent]
    });
    fixture = TestBed.createComponent(DoctorinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
