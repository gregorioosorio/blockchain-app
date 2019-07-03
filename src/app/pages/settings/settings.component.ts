import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { BlockChain } from 'educational-blockchain/blockchain';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  blockchain: BlockChain;

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit() {
    this.blockchain = this.blockchainService.blockchain;
  }

}
