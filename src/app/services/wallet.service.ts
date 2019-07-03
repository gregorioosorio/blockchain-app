import { Injectable } from '@angular/core';

import { Wallet } from 'educational-blockchain/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  appWallet: Wallet;

  constructor() {
    this.appWallet = new Wallet('user');
    console.log(this);
  }
}
