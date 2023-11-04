import { TestBed } from '@angular/core/testing';

import { AdminappointmentsService } from './adminappointments.service';

describe('AdminappointmentsService', () => {
  let service: AdminappointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminappointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
