import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CashInvestmentComponent } from './cash-investment/cash-investment.component';
import { AppRoutingModule } from './app-routing.module';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CashInvestmentComponent,
    MarketMoversComponent,
    CashFlowComponent,
    NetWorthComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
