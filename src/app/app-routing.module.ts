import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { IndexComponent } from './index/index.component';
import { MonthlybillComponent } from './monthlybill/monthlybill.component';
import { RegisterComponent } from './register/register.component';
import { TodaybillComponent } from './todaybill/todaybill.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsermenuComponent } from './usermenu/usermenu.component';

const routes: Routes = [
  //{path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'usermenu',component:UsermenuComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'editmenu',component:EditmenuComponent},
  {path:'addfood',component:AddfoodComponent},
  {path:'addcart',component:AddcartComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'adminadduser',component:AdminadduserComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'todaybill',component:TodaybillComponent},
  {path:'monthbill',component:MonthlybillComponent},
  {path:'',component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
