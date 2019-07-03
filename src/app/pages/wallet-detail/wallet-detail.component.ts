import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { WalletService } from 'src/app/services/wallet.service';

import { BlockChain } from 'educational-blockchain/blockchain';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.css']
})
export class WalletDetailComponent implements OnInit {

  balance = 0;
  walletAddress: string;

  constructor(private blockchainService: BlockchainService, private walletService: WalletService) { }

  ngOnInit() {
    this.walletAddress = this.walletService.appWallet.walletAddress;
    this.balance = this.blockchainService.blockchain.calculateBalance(this.walletAddress);
  }

}
