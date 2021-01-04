import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { OrdersComponent } from "./orders/orders.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path: "", component: ProductsComponent },
  {
    path: "products",
    component: ProductsComponent,
  },
  { path: "products/:id", component: ProductComponent },
  { path: "orders", component: OrdersComponent },
  { path: "cart", component: CartComponent },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
