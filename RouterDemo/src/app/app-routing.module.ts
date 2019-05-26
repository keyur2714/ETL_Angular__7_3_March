import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-notfound.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'home' , component : HomeComponent},
  { path : 'sales' , component : SalesComponent},
  { path : 'cartItems' , component : CartItemsComponent},
  { path : 'orderDetail' , component : OrderDetailComponent , canActivate : [AuthGuard]},
  { path : 'aboutus' , component : AboutusComponent},
  { path : 'contactus' , component : ContactusComponent},
  { path : 'signin' , component : LoginComponent},
  { path : 'logout' , component : LogoutComponent},
  { path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
