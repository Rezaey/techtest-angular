import { ShoppingItem } from "src/models/shopping-item.model";

export class CartService {
  private shoppingCart: ShoppingItem[] = [];

  totalPrice: number = 0;
  orders: ShoppingItem[][] = [];

  setShoppingCart(itms: ShoppingItem[]) {
    itms.forEach((element) => {
      let index = this.shoppingCart.findIndex((el) => el.id === element.id);
      if (index > -1) {
        this.shoppingCart[index].quantity + element.quantity;
      } else {
        this.shoppingCart.push(element);
      }
    });
  }

  deleteShoppingCart() {
    this.shoppingCart = [];
  }

  getShoppingCart(): ShoppingItem[] {
    return this.shoppingCart;
  }

  checkOut(items: ShoppingItem[]) {
    let order: ShoppingItem[] = [];
    items.forEach((el) => {
      order.push(el);
    });
    this.orders.push(order);
  }
}
