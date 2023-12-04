import { Injectable } from "@angular/core";
import { Food } from "../../shared/models/Food";
import { Tag } from "../../shared/models/Tag";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  // get all the tag models instances
  getAllTags(): Tag[] {
    // literals gonna be calculated by the server
    return [
      { name: "All", count: 14 },
      { name: "FastFood", count: 4 },
      { name: "Pizza", count: 2 },
      { name: "Lunch", count: 3 },
      { name: "SlowFood", count: 2 },
      { name: "Hamburger", count: 1 },
      { name: "Fry", count: 1 },
      { name: "Soup", count: 1 },
    ];
  }

  // get the foods filtered by tags
  getAllFoodsByTag(tag: string): Food[] {
    if (tag === "All") {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }

  // get the foods filtered by search terms
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // get all food models instances
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: "Pepperoni Pizza",
        cookTime: "20-30",
        price: 10,
        favorite: false,
        origins: ["italy"],
        stars: 4.5,
        imageUrl: "/assets/images/foods/food-1.jpg",
        tags: ["FastFood", "Pizza", "Lunch"],
      },
      {
        id: 2,
        name: "Meatballs",
        price: 20,
        cookTime: "20-30",
        favorite: true,
        origins: ["persia", "middle east", "china"],
        stars: 4.7,
        imageUrl: "/assets/images/foods/food-2.jpg",
        tags: ["SlowFood", "Lunch"],
      },
      {
        id: 3,
        name: "Hamburger",
        price: 5,
        cookTime: "10-15",
        favorite: false,
        origins: ["germany", "us"],
        stars: 3.5,
        imageUrl: "/assets/images/foods/food-3.jpg",
        tags: ["FastFood", "Hamburger"],
      },
      {
        id: 4,
        name: "Fried Potatoes",
        price: 2,
        cookTime: "15-20",
        favorite: true,
        origins: ["belgium", "france"],
        stars: 3.3,
        imageUrl: "/assets/images/foods/food-4.jpg",
        tags: ["FastFood", "Fry"],
      },
      {
        id: 5,
        name: "Chicken Soup",
        price: 11,
        cookTime: "40-50",
        favorite: false,
        origins: ["india", "asia"],
        stars: 3.0,
        imageUrl: "/assets/images/foods/food-5.jpg",
        tags: ["SlowFood", "Soup"],
      },
      {
        id: 6,
        name: "Vegetables Pizza",
        price: 9,
        cookTime: "40-50",
        favorite: false,
        origins: ["italy"],
        stars: 4.0,
        imageUrl: "/assets/images/foods/food-6.jpg",
        tags: ["FastFood", "Pizza", "Lunch"],
      },
    ];
  }
}
