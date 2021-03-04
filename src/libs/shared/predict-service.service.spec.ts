import { TestBed } from '@angular/core/testing';

import { PredictServiceService } from './predict-service.service';

describe('PredictServiceService', () => {
  let service: PredictServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
