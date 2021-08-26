import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-other-doughnut-chart',
  templateUrl: './other-doughnut-chart.component.html',
  styleUrls: ['./other-doughnut-chart.component.css']
})
export class OtherDoughnutChartComponent implements OnInit {

  
  doughnutChartLabels: Label[] = ['spend1', 'spend2', 'spend3'];
  doughnutChartData: MultiDataSet = [
    [55, 5, 10]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}

