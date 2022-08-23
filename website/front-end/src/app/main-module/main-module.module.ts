import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './MainPortalComponents/header/header.component';
import { FooterComponent } from './MainPortalComponents/footer/footer.component';
import { HomeComponent } from './MainPortalComponents/home/home.component';
import { ProductsComponent } from './MainPortalComponents/products/products.component';
import { ContactUsComponent } from './MainPortalComponents/contact-us/contact-us.component';
import { AdminLoginComponent } from './ManagementPortal/admin-login/admin-login.component';
import { AdminRegisterComponent } from './ManagementPortal/admin-register/admin-register.component';
import { UserRegisterComponent } from './ManagementPortal/user-register/user-register.component';
import { UserLoginComponent } from './ManagementPortal/user-login/user-login.component';
import { ViewProductComponent } from './MainPortalComponents/view-product/view-product.component';
import { CheckOutComponent } from './MainPortalComponents/check-out/check-out.component';
import { EditCartComponent } from './MainPortalComponents/edit-cart/edit-cart.component';
import { PurchaseSuccessfulComponent } from './MainPortalComponents/purchase-successful/purchase-successful.component';
import { PurchaseFailedComponent } from './MainPortalComponents/purchase-failed/purchase-failed.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ContactUsComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ViewProductComponent,
    CheckOutComponent,
    EditCartComponent,
    PurchaseSuccessfulComponent,
    PurchaseFailedComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
