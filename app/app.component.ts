import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <div id="title">
      <h1>Slabtown Gym</h1>
    </div>
    <h2>Member Meal Calorie Tracker</h2>

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
    new Meal("Protein Smoothie", "made it at home with whey protein", 220, new Date(), 0),
    new Meal("Chicken Wings", "added awesomesauce", 512, new Date(), 1),
    new Meal("Bagel", "ate it with butter", 290, new Date(), 2)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {

  }
}
