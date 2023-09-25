import { TestBed } from '@angular/core/testing';

import { WheelEventService } from './wheel-event.service';

describe('WheelEventService', () => {
  let service: WheelEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheelEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
