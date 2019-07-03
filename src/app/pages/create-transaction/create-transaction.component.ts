import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { WalletService } from 'src/app/services/wallet.service';
import { NgForm } from '@angular/forms';

import { Transaction } from 'educational-blockchain/blockchain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  @ViewChild('txForm', null) txForm: NgForm;
  walletAddress: string;

  constructor(private blockchainService: BlockchainService, private walletService: WalletService, private router: Router) {
    this.walletAddress = this.walletService.appWallet.walletAddress;
  }

  ngOnInit() {
  }

  onSubmit() {
    try {
      const newTransaction: Transaction = new Transaction(this.walletAddress, this.txForm.value.toAddress, this.txForm.value.amount);
      newTransaction.signTransaction(this.walletService.appWallet.privateKey);
      this.blockchainService.blockchain.addPendingTransaction(newTransaction);
      this.router.navigate(['/transaction/pending', { addedTx: true }]);
    } catch (e) {
      alert(e);
    }
  }
}
