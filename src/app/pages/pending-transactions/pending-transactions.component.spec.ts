import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PendingTransactionsComponent } from './pending-transactions.component';
import { TransactionsTableComponent } from 'src/app/components/transactions-table/transactions-table.component';

describe('PendingTransactionsComponent', () => {
  let component: PendingTransactionsComponent;
  let fixture: ComponentFixture<PendingTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PendingTransactionsComponent, TransactionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
