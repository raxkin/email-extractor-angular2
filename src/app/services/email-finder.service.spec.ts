/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { EmailFinderService } from './email-finder.service';

describe('Service: EmailFinder', () => {
  beforeEach(() => {
    addProviders([EmailFinderService]);
  });

  it('should ...',
    inject([EmailFinderService],
      (service: EmailFinderService) => {
        expect(service).toBeTruthy();
      }));
});
