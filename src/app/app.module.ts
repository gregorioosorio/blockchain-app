import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BlockDetailComponent } from './components/block-detail/block-detail.component';
import { WalletDetailComponent } from './pages/wallet-detail/wallet-detail.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlockchainComponent,
    SettingsComponent,
    BlockDetailComponent,
    WalletDetailComponent,
    TransactionsTableComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
