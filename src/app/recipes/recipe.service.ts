import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is a First Recipe', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg'),
    new Recipe('Second Recipe', 'This is a Second Recipe', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
