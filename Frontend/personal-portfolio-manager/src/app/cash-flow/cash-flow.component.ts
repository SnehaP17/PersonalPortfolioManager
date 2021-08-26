import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/service/apicalls.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit {

  cashRes:any = null;
  cashSum:any = null;
  panelOpen:boolean = false;
  constructor(private apiCallsService:ApicallsService) { }

  ngOnInit(): void {
    this.getCash();
    this.getCashSum();
  }

  getCash(){
    this.apiCallsService.getCash()
    .subscribe((data) => {
      this.cashRes = data; 
    });
  }

  getCashSum(){
    this.apiCallsService.getCashSum()
    .subscribe((res) => {
      this.cashSum = res; 
    });
  }

}
