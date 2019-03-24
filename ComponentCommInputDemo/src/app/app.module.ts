import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    HeaderComponent,
    MyDropdownComponent,
    RegistrationComponent,
    ProductListComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
