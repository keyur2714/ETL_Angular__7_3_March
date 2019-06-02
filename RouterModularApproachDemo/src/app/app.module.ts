import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './auth/authentication.service';
import { PageNotFoundComponent } from './page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    HomeComponent,
    AboutusComponent,
    ContactusComponent,    
    LoginComponent,
    LogoutComponent,    
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,        
    FormsModule,
    HttpClientModule,    
    //ProductModule,
    AppRoutingModule    
  ],
  providers: [        
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Loaded...");
  }  
}
