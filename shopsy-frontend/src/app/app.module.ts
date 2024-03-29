import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { CreateproductsComponent } from './createproducts/createproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CreateordersComponent } from './createorders/createorders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { SuccessComponent } from './success/success.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    CreateproductsComponent,
    UpdateproductsComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    CreateordersComponent,
    OrderdetailsComponent,
    OrderlistComponent,
    CreatepaymentComponent,
    PaymentlistComponent,
    SuccessComponent,
    SellerComponent,
    BuyerComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    FurnitureComponent,
    MobilesComponent
    
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
