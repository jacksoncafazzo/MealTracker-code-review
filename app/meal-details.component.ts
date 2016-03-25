import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h3>{{ meal.name }} was {{ meal.calories }} calories </h3>
  <h4>because I: {{ meal.details }}</h4>
  `
})

export class MealDetailsComponent {
  public mealDetails: Meal;

}
