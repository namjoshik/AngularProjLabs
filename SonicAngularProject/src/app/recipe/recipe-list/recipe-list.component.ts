import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is sample recipe',
      'https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-fast-food-squid-lunch-cuisine-delicious-rice-thailand-shrimp-asian-food-vegetarian-food-foodstuff-thailand-food-thai-food-side-dish-the-pork-fried-rice-made-southeast-asian-food-steamed-rice-stir-fried-seafood-a-fried-egg-plate-lunch-1377212.jpg'
      ),
    new Recipe(
      'Test Recipe',
      'This is sample recipe',
      'https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-fast-food-squid-lunch-cuisine-delicious-rice-thailand-shrimp-asian-food-vegetarian-food-foodstuff-thailand-food-thai-food-side-dish-the-pork-fried-rice-made-southeast-asian-food-steamed-rice-stir-fried-seafood-a-fried-egg-plate-lunch-1377212.jpg'
      )
  ]

  constructor() { }

  ngOnInit() {
  }

}
