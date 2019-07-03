import { TestBed } from '@angular/core/testing';

import { PendingTransactionsService } from './pending-transactions.service';

describe('PendingTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingTransactionsService = TestBed.get(PendingTransactionsService);
    expect(service).toBeTruthy();
  });
});
