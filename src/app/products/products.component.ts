import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingItem } from "src/models/shopping-item.model";
import { CartService } from "../services/cart.service";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.sass"],
})
export class ProductsComponent implements OnInit {
  selectedItems: ShoppingItem[] = [];
  totalPrice = 0;

  data: ShoppingItem[];

  constructor(
    private cartSevice: CartService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get<any[]>("http://localhost:3000/products")
      .pipe(
        map((el) => {
          el.forEach((e) => {
            e["selected"] = false;
            e["quantity"] = 0;
          });
          return el;
        })
      )
      .subscribe((data) => {
        this.data = data;
      });
  }

  eventCheck(val: boolean, index: number) {
    this.data[index].selected = val;
    if (!val) {
      this.quantityChg(0, index);
    }
  }

  quantityChg(val: number, index: number) {
    this.selectedItems = [];
    this.totalPrice = 0;
    this.data[index].quantity = val >= 0 ? val : 0;
    this.data.forEach((el) => {
      if (el.selected) {
        this.selectedItems.push(el);
        this.totalPrice = this.totalPrice + el.quantity * el.price;
      }
    });
  }

  addToCart() {
    this.cartSevice.setShoppingCart(this.selectedItems);
    this.cartSevice.totalPrice = this.totalPrice;
    this.data.map((el) => {
      el.selected = false;
    });
    this.router.navigate(["/cart"]);
  }
}
