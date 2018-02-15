import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class RecipeService {
  
  recipeChanged = new Subject<Recipe[]>();
  
  recipes: Recipe[] = [
    new Recipe('Couscous au Osben',
     'Le couscous se décline en plusieurs variantes. Celle du Osben est la plus connue',
     'http://tunisme.com/files/2014/04/554051_164959136961012_1797451071_n.jpg',
    [
      new Ingredient('Osben', 1),
      new Ingredient("couscous", 1)
    ]),
    new Recipe('Lablebi',
     'Un des plats les plus connus en Tunisie',
     'https://femmesdetunisie.com/wp-content/uploads/2015/12/lablabi.jpg',
    [
      new Ingredient('œufs', 1),
      new Ingredient('ton', 50),
    ])
  ];
  constructor(private slService: ShoppingListService) { }

 getRecipes() {
  return this.recipes.slice(); 
    
  }
 getRecipe(index: number) {
 return this.recipes[index];
  }

 addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);
 }

 addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
  this.recipeChanged.next(this.recipes.slice());
 }
 
 updateRecipe(index: number, newRecipe: Recipe) {
  this.recipes[index] = newRecipe;
  this.recipeChanged.next(this.recipes.slice());
 }
 deleteRecipe(index: number) {
   this.recipes.splice(index, 1);
   this.recipeChanged.next(this.recipes.slice());
 }

 setRecipes(recipes: Recipe[]) {
  this.recipes = recipes;
  this.recipeChanged.next(this.recipes.slice());

 }

}
