import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/service/apicalls.service';

@Component({
  selector: 'app-cash-investment',
  templateUrl: './cash-investment.component.html',
  styleUrls: ['./cash-investment.component.css']
})
export class CashInvestmentComponent implements OnInit {

  investmentRes:any = null;

  constructor(private apiCallsService:ApicallsService) { }

  ngOnInit(): void {
    this.getInvestment();
  }

  getInvestment(){
    this.apiCallsService.getInvestment()
    .subscribe((data) => {
      this.investmentRes = data; 
    });
  }
}
