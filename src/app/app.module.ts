import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { AddcartComponent } from './addcart/addcart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { UserdataComponent } from './userdata/userdata.component';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';
import { TodaybillComponent } from './todaybill/todaybill.component';
import { MonthlybillComponent } from './monthlybill/monthlybill.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserloginComponent,
    AdminloginComponent,
    RegisterComponent,
    IndexComponent,
    UsermenuComponent,
    AdmindashboardComponent,
    EditmenuComponent,
    AddfoodComponent,
    AddcartComponent,
    AdminregisterComponent,
    UserdataComponent,
    AdminadduserComponent,
    TodaybillComponent,
    MonthlybillComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
