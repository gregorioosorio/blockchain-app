import { Component, OnInit, Input } from '@angular/core';

import { Transaction } from 'educational-blockchain/blockchain';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  @Input() blockIndex: number;
  @Input() transactions: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
