import { TestBed, inject } from '@angular/core/testing';

import { CatsStorageService } from './cats-storage.service';

describe('CatsStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatsStorageService]
    });
  });

  it('should be created', inject([CatsStorageService], (service: CatsStorageService) => {
    expect(service).toBeTruthy();
  }));
});
