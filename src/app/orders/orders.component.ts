import { Component, OnInit } from "@angular/core";
import { ShoppingItem } from "src/models/shopping-item.model";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.sass"],
})
export class OrdersComponent implements OnInit {
  orders: ShoppingItem[][] = [];

  constructor(private cartSevice: CartService) {}

  ngOnInit() {
    this.orders = this.cartSevice.orders;
  }

  getTotalPrice(items: ShoppingItem[]) {
    let total = 0;
    items.forEach((el) => {
      total = total + el.price * el.quantity;
    });
    return total;
  }
}
