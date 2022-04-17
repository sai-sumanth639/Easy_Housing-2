import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../services/buyers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buyer-register',
  templateUrl: './buyer-register.component.html',
  styleUrls: ['./buyer-register.component.css']
})
export class BuyerRegisterComponent implements OnInit {

  constructor(public buyersService:BuyersService) { }

  ngOnInit(): void {
  }

  onSubmit(buyerForm: NgForm) {
    this.buyersService.registerBuyer().subscribe({
      next: (data) => { },
      complete: () => {console.log("registrattion successful");},
      //complete: () => { this.router.navigate(['/seller/']) }, //On successfull Complete, redirect to another page
      error: (err) => { console.log("Unable to register seller" + err); }
    })

  }

}
