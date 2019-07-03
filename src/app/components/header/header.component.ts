import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pendingTransactions: boolean;

  constructor(private blockchainService: BlockchainService) {
    this.pendingTransactions = this.blockchainService.blockchain.pendingTransactions.length > 0;
  }

  ngOnInit() {
  }

}
