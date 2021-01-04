import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";
import { HeaderComponent } from "./header/header.component";
import { ProductComponent } from "./products/product/product.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CartComponent } from "./cart/cart.component";
import { CartService } from "./services/cart.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    HeaderComponent,
    ProductComponent,
    PageNotFoundComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
