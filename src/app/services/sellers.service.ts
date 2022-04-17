import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../models/seller.model';



@Injectable({
  providedIn: 'root'
})
export class SellersService {

  sellerData: Seller = new Seller();

  constructor(private http: HttpClient) { }
  baseUrl: string="https://localhost:44323/api/sellers/";

  
  registerSeller()
  {
    console.log(this.sellerData);
    return this.http.post(this.baseUrl+"Register",this.sellerData);
  }


}
