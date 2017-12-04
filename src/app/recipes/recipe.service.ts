import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is a First Recipe',
      'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg',
      [
        new Ingredient('chicken breast', 1),
        new Ingredient('kerala spices', 1)
      ]),
    new Recipe(
      'Second Recipe',
      'This is a Second Recipe',
      'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('carrots', 5)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngFromRecipe(ingredients);
  }
}
