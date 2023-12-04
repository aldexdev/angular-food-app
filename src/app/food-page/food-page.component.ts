import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Food } from "../shared/models/Food";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodService } from "../services/food/food.service";
import { TagsComponent } from "../tags/tags.component";
import { CartService } from "../services/cart/cart.service";

@Component({
  selector: "app-food-page",
  standalone: true,
  imports: [TagsComponent, CommonModule],
  templateUrl: "./food-page.component.html",
  styleUrl: "./food-page.component.css",
})
export class FoodPageComponent {
  food!: Food;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.food = foodService.getFoodById(params["id"]);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart");
  }
}
