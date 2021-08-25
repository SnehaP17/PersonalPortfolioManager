import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/service/apicalls.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {
  cashSum:any = null;
  investmentSum:any = null;
  totalNetWorth:number = -1;
  constructor(private apiCallsService:ApicallsService) { }

  ngOnInit():void {
    this.getCashSum();
  }

  getCashSum():number{
    this.apiCallsService.getCashSum()
    .subscribe((res) => {
      this.cashSum = res; 
      this.getInvestmentSum();

    });
    return parseInt(this.cashSum);
  }

  getInvestmentSum():number{
    this.apiCallsService.getInvestmentSum()
    .subscribe((res) => {
      this.investmentSum = res;
      this.getTotal();
    });
    return parseInt(this.investmentSum);
  }

   getTotal(){
    this.totalNetWorth = parseInt(this.cashSum) + parseInt(this.investmentSum);
  }

}
