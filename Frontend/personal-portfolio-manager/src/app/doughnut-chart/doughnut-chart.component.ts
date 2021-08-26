import { Component, OnInit } from '@angular/core';
import {ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ApicallsService } from 'src/service/apicalls.service';
import { NetWorthComponent } from '../net-worth/net-worth.component';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  cashNum:any = null;
  investmentNum:any = null;
  networth:any = null;
  constructor(private apiCallsService:ApicallsService) { }

  doughnutChartLabels: Label[] = ['cash', 'investment'];
  doughnutChartData: MultiDataSet = [[this.cashNum, this.investmentNum]]
  doughnutChartType: ChartType = 'doughnut';
  

  ngOnInit():void {
    this.cashNum = this.getCashSum()
  }

  getCashSum(){
    this.apiCallsService.getCashSum()
    .subscribe((res) => {
      this.cashNum = res; 
      console.log(res)
      this.getInvestmentSum()
    });
  }

  getInvestmentSum(){
    this.apiCallsService.getInvestmentSum()
    .subscribe((res) => {
      this.investmentNum = res; 
      this.doughnutChartData = [[this.cashNum, this.investmentNum]]
      this.networth = this.cashNum + this.investmentNum
    });
  }
}
  
  




