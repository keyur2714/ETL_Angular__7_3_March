import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-notfound.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { ProductService } from './services/product.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AuthenticationService } from './services/authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    SalesComponent,
    LoginComponent,
    PageNotFoundComponent,
    CartItemsComponent,
    OrderDetailComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
