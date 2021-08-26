import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [18205,22429,26552,30761,32761,32761,36103,41226], label: '' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July','August']
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

  constructor() { }

  ngOnInit(): void {
  }

}
