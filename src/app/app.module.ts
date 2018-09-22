import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { BootNavbarComponent } from './boot-navbar/boot-navbar.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { UserService } from './services/user.service';
import { AdminAuthGaurd } from './services/admin-auth-gaurd.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    LoginComponent,
    MyOrderComponent,
    OrderSuccessComponent,
    CheckOutComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    BootNavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },

      { path: 'my-orders', component: MyOrderComponent, canActivate: [AuthGaurd] },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurd] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGaurd] },

      {
        path: 'admin/admin-products',
        component: AdminProductsComponent,
        canActivate: [AuthGaurd,AdminAuthGaurd]
      },
      {
        path: 'admin/admin-orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGaurd,AdminAuthGaurd]
      }
    ])
  ],
  providers: [AuthService,UserService,AdminAuthGaurd, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
