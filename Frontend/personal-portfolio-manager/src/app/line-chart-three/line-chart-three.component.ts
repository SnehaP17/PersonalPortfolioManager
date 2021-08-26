import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-line-chart-three',
  templateUrl: './line-chart-three.component.html',
  styleUrls: ['./line-chart-three.component.css']
})
export class LineChartThreeComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  lineChartData: ChartDataSets[] = [
    { data: [9552, 12894, 14894, 19017, 23227, 25227,25227,28569.32692], label: '' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July','August'];
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
