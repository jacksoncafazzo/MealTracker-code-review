import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Slabtown Gym</h1><h2>Member Meal Calorie Tracker</h2>

    <meal-list
    [mealList]="meals"
    (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
    new Meal("Protein Smoothie", "Homemade with whey protein", 220, 0)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {

  }
}
