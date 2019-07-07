import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainComponent } from './blockchain.component';
import { BlockDetailComponent } from 'src/app/components/block-detail/block-detail.component';
import { TransactionsTableComponent } from 'src/app/components/transactions-table/transactions-table.component';

describe('BlockchainComponent', () => {
  let component: BlockchainComponent;
  let fixture: ComponentFixture<BlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainComponent, BlockDetailComponent, TransactionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
