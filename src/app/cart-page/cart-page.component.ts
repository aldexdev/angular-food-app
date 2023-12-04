import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CartService } from "../services/cart/cart.service";
import { Cart } from "../shared/models/Cart";
import { CartItem } from "../shared/models/CartItem";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: "app-cart-page",
  standalone: true,
  imports: [CommonModule, RouterLink, NotFoundComponent],
  templateUrl: "./cart-page.component.html",
  styleUrl: "./cart-page.component.css",
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuatity(cartItem.food.id, quantity);
    this.setCart();
  }

  // setter for the cart to pass to the service
  setCart() {
    this.cart = this.cartService.getCart();
  }
}
