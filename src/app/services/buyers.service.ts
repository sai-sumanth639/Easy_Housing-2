import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Buyer } from '../models/buyer.model';


@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  buyerData: Buyer = new Buyer();

  constructor(private http: HttpClient) { }
  baseUrl: string="https://localhost:44323/api/buyers/";

  
  registerBuyer()
  {
    console.log(this.buyerData);
    return this.http.post(this.baseUrl+"Register",this.buyerData);
  }
}
