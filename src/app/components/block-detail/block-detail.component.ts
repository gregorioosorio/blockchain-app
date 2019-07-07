import { Component, OnInit, Input } from '@angular/core';

import { Block } from 'educational-blockchain/blockchain';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.css']
})
export class BlockDetailComponent implements OnInit {

  @Input() i: number;
  @Input() block: Block;
  @Input() selectedBlock: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickOnBlock() {
    console.log("click on block");
  }
}
