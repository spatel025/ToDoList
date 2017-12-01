import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
