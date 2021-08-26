import { Component, OnInit } from '@angular/core';
import {ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ApicallsService } from 'src/service/apicalls.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  cashNum:any = null;
  investmentNum:any = null;
  constructor(private apiCallsService:ApicallsService) { }

  ngOnInit():void {
    //this.getCashSum()
    //this.getInvestmentSum()
  }

  //getCashSum(){
  //  this.apiCallsService.getCashSum()
  //  .subscribe((res) => {
  //    this.cashNum = res; 
  //  });
  //}

  //getInvestmentSum(){
  //  this.apiCallsService.getInvestmentSum()
  //  .subscribe((res) => {
  //    this.investmentNum = res; 
  //  });
  //}



  doughnutChartLabels: Label[] = ['cash1', 'cash2', 'cash3'];
  doughnutChartData: MultiDataSet = [[34,56,333]]
  doughnutChartType: ChartType = 'doughnut';
  

  
}



