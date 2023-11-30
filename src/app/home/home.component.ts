import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods: String[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
