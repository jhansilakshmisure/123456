import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadComponent } from './dread.component';

describe('DreadComponent', () => {
  let component: DreadComponent;
  let fixture: ComponentFixture<DreadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreadComponent]
    });
    fixture = TestBed.createComponent(DreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
