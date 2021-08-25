import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/service/apicalls.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit {

  cashRes:any = null;

  constructor(private apiCallsService:ApicallsService) { }

  ngOnInit(): void {
    this.getCash();
  }

  getCash(){
    this.apiCallsService.getCash()
    .subscribe((data) => {
      this.cashRes = data; 
    });
  }

}
