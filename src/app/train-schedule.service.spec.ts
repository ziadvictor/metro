import { TestBed, inject } from '@angular/core/testing';

import { TrainScheduleService } from './train-schedule.service';

describe('TrainScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainScheduleService]
    });
  });

  it('should ...', inject([TrainScheduleService], (service: TrainScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
