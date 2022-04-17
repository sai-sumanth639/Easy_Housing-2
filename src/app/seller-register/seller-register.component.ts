import { Component, OnInit } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent implements OnInit {

  constructor(public sellersService:SellersService) { }

  ngOnInit(): void {
  }

  onSubmit(sellerForm: NgForm) {
    this.sellersService.registerSeller().subscribe({
      next: (data) => { },
      complete: () => {console.log("registrattion successful");},
      //complete: () => { this.router.navigate(['/seller/']) }, //On successfull Complete, redirect to another page
      error: (err) => { console.log("Unable to register seller" + err); }
    })

  }
}
