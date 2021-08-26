import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/service/apicalls.service';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {
  
  gainersRes:any = null;
  losersRes:any = null;
  paramsObj:any = {companyName:'', id:1};
  viewPrice:string = 'percentChange';

  constructor(private apiCallsService:ApicallsService) { }

  ngOnInit(): void {
    this.getMarketGainers();
    this.getMarketLosers();
    this.tempFunc();
  }

  getMarketGainers(){
    this.apiCallsService.getCompanyGainers()
    .subscribe((data) => {
      this.gainersRes = data;
    });
  }

  getMarketLosers(){
    this.apiCallsService.getCompanyLosers()
    .subscribe((data) => {
      this.losersRes = data; 
    });
  }

  tempFunc(){
    console.log(`val is ${this.viewPrice}`);
  }

}
