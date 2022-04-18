import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../services/buyers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.css']
})
export class BuyerLoginComponent implements OnInit {


  constructor(public buyersService:BuyersService) { }

  ngOnInit(): void {}

    onSubmit(buyerForm: NgForm) {
      this.buyersService.registerBuyer().subscribe({
        next: (data) => { },
        complete: () => {console.log("registrattion successful");},

        error: (err) => { console.log("Unable to register seller" + err); }
      })
  }
}
