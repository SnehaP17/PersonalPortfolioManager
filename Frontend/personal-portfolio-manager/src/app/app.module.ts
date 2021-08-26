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
import { LineChartComponent } from './line-chart/line-chart.component';
import { OtherDoughnutChartComponent } from './other-doughnut-chart/other-doughnut-chart.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { LineChartTwoComponent } from './line-chart-two/line-chart-two.component';
import { LineChartThreeComponent } from './line-chart-three/line-chart-three.component';

@NgModule({
  declarations: [
    AppComponent,
    CashInvestmentComponent,
    MarketMoversComponent,
    CashFlowComponent,
    NetWorthComponent,
    DoughnutChartComponent,
    LineChartComponent,
    OtherDoughnutChartComponent,
    LineChartTwoComponent,
    LineChartThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
