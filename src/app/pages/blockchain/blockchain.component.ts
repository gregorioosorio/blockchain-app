import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

import { Block } from 'educational-blockchain/blockchain';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  chain: Block[];
  selectedBlockIndex: number;
  selectedBlock: Block;

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit() {
    this.chain = this.blockchainService.blockchain.chain;
    this.selectedBlockIndex = 0;
    this.selectedBlock = this.chain[this.selectedBlockIndex];
  }

  showBlockTransactions(block: Block) {
    this.selectedBlockIndex = this.blockchainService.blockchain.chain.indexOf(block);
    this.selectedBlock = block;
    console.log(block);
  }
}
