import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Food } from "../shared/models/Food";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../services/food/food.service";
import { TagsComponent } from "../tags/tags.component";

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
    private foodService: FoodService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.food = foodService.getFoodById(params["id"]);
      }
    });
  }
}
