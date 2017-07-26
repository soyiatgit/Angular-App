import { TestBed, async, inject } from '@angular/core/testing';

import { CheckUnsavedDataGuard } from './check-unsaved-data.guard';

describe('CheckUnsavedDataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckUnsavedDataGuard]
    });
  });

  it('should ...', inject([CheckUnsavedDataGuard], (guard: CheckUnsavedDataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
