import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(private http:HttpClient) { }

 getCompanyGainers(){
  let res = this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops23.conygre.com/companies/topfive
  `);
  console.log(`res is ${JSON.stringify(res)}`)
  return res;
 } 

 getCompanyLosers(){
  let res = this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops23.conygre.com/companies/bottomfive
  `);
  return res;
 } 

 getInvestment(){
  let res = this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops23.conygre.com/invesment`);
  return res;
 }

 getCash(){
  let res = this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops23.conygre.com/cash`);
  return res;
 } 

}
