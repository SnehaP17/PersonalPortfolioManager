import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CashInvestmentComponent } from './cash-investment/cash-investment.component';


const routes: Routes = [
  {path:'', redirectTo: "", pathMatch: 'full'},
  {path:'cash-investment', component:CashInvestmentComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
