import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingItem } from "src/models/shopping-item.model";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.sass"],
})
export class CartComponent implements OnInit {
  cart: ShoppingItem[];
  total = 0;

  constructor(private cartSevice: CartService, private router: Router) {}

  ngOnInit() {
    this.cart = this.cartSevice.getShoppingCart();
    this.total = this.cartSevice.totalPrice;
  }

  finalPriceCheck() {
    this.total = 0;
    this.cart.forEach((el) => {
      this.total = this.total + el.quantity * el.price;
    });
  }

  quantityChg(val: number, index: number) {
    this.cart[index].quantity = val;
    this.finalPriceCheck();
  }

  cancelItem(index: number) {
    this.cart.splice(index, 1);
    this.cartSevice.setShoppingCart(this.cart);
    this.finalPriceCheck();
  }

  checkOut() {
    this.cart = [];
    this.cartSevice.deleteShoppingCart();
    this.router.navigate(["/orders"]);
  }
}
