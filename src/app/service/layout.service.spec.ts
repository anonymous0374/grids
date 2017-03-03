import { TestBed, inject } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('GetClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ LayoutService ]
    });
  });

  it('should ...', inject([ LayoutService ], (service: LayoutService) => {
    expect(service).toBeTruthy();
  }));
});
