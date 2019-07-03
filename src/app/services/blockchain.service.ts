import { Injectable } from '@angular/core';
import { BlockChain, Transaction } from 'educational-blockchain/blockchain';

import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  blockchain: BlockChain;

  constructor(private walletService: WalletService) {
    this.blockchain = new BlockChain(2, 100);
    console.log(this.blockchain);

    // block 1 (mocking data)
    this.blockchain.addPendingTransaction(new Transaction('system', this.walletService.appWallet.walletAddress, 100));
    console.log(this.blockchain);
    this.blockchain.minePendingTransaction(this.walletService.appWallet);

  }
}
