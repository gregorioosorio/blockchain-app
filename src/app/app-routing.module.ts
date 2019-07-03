import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WalletDetailComponent } from './pages/wallet-detail/wallet-detail.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';

const appRoutes: Routes = [
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'wallet-detail', component: WalletDetailComponent },
  { path: 'transaction', children: [
    {path: 'new', component: CreateTransactionComponent},
    {path: 'pending', component: PendingTransactionsComponent}
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/blockchain' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
