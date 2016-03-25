import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h3>{{ meal.name }} was {{ meal.calories }} calories </h3>
  <h4>because I: {{ meal.details }} at {{ meal.date }}</h4>
  `
})

export class MealComponent {
  public meal: Meal;

}
