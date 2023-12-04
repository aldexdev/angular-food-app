import { Component, OnInit } from "@angular/core";
import { Tag } from "../shared/models/Tag";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FoodService } from "../services/food/food.service";

@Component({
  selector: "app-tags",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./tags.component.html",
  styleUrl: "./tags.component.css",
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
