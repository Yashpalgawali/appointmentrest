import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditappointmentComponent } from './editappointment.component';

describe('EditappointmentComponent', () => {
  let component: EditappointmentComponent;
  let fixture: ComponentFixture<EditappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditappointmentComponent]
    });
    fixture = TestBed.createComponent(EditappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
