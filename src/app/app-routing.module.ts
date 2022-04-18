import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerLoginComponent } from './buyer-login/buyer-login.component';
import { BuyerRegisterComponent } from './buyer-register/buyer-register.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {path:'buyer',component:BuyerComponent},
  {path:'buyer-login',component:BuyerLoginComponent},
  {path:'buyer-register',component:BuyerRegisterComponent},
  {path:'buyer-dashboard',component:BuyerDashboardComponent},
  {path:'seller',component:SellerComponent},
  {path:'seller-login',component:SellerLoginComponent},
  {path:'seller-register',component:SellerRegisterComponent},
  {path:'seller-dashboard',component:SellerDashboardComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BuyerComponent,SellerComponent,BuyerDashboardComponent,BuyerLoginComponent,BuyerRegisterComponent,SellerLoginComponent,SellerRegisterComponent,SellerDashboardComponent]


