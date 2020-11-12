/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StreamClientService } from './stream-client.service';

describe('Service: StreamClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamClientService]
    });
  });

  it('should ...', inject([StreamClientService], (service: StreamClientService) => {
    expect(service).toBeTruthy();
  }));
});
