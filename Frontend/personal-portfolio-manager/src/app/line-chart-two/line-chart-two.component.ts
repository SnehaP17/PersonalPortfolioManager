import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-line-chart-two',
  templateUrl: './line-chart-two.component.html',
  styleUrls: ['./line-chart-two.component.css']
})
export class LineChartTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData: ChartDataSets[] = [
    { data: [5311, 7534, 7534, 7534, 7534, 7534, 7534,8534], label: '' },
    
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
  //lineChartLabels: Label[] = []

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'lightblue',
      backgroundColor: 'rgba(30,144,255,0.38)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

}
