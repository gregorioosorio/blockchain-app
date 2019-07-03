import { Component, OnInit } from '@angular/core';

import { BlockchainService } from 'src/app/services/blockchain.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.css']
})
export class PendingTransactionsComponent implements OnInit {

  transactions: [];
  justAddedTx = false;
  isMining = false;

  constructor(
    private blockchainService: BlockchainService,
    private walletService: WalletService,
    private router: Router,
    private route: ActivatedRoute) {
    this.updateTransactions();
  }

  updateTransactions() {
    this.transactions = this.blockchainService.blockchain.pendingTransactions;
    console.log(this.transactions);
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('addedTx')) {
      this.justAddedTx = true;

      setTimeout(() => {
        this.justAddedTx = false;
      }, 4000);
    }

  }

  mineTransactions() {
    this.isMining = true;
    this.blockchainService.blockchain.minePendingTransaction(this.walletService.appWallet);
    this.isMining = false;

    this.updateTransactions();

    this.router.navigate(['']);
  }

}
