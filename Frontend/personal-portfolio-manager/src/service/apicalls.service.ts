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

//  getCompanyLosers(){
//   let res = this.http.get(`http://personalportfoliomanager-personalportfoliomanager.namdevops23.conygre.com/companies/bottomfive
//   `);
//   return res;
//  } 

//  getSwapiData(params: { category: string; id: any }){
//   let ret = this.http.get(`https://swapi.dev/api/${params.category}/${params.id}`);
//   console.log(ret);
//   return ret;
// }
}
