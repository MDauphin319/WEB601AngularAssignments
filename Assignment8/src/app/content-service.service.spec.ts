import { TestBed } from '@angular/core/testing';

import { ContentServiceService } from './content-service.service';

describe('ContentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentServiceService = TestBed.get(ContentServiceService);
    expect(service).toBeTruthy();
  });
});
