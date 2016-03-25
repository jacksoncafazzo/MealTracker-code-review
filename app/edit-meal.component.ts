import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class= "meal-form">
  <h3>Edit Meal Details: </h3>
  <p>If editing the name of the meal, be sure "show all" is selected in the filter list to see the updated value as you edit it</p>
  <input [(ngModel)]="meal.name" class="input-lg meal-form"/>
  <input [(ngModel)]="meal.calories" class="input-lg meal-form"/>
  <input [(ngModel)]="meal.details" class="input-lg meal-form"/>
  <input [(ngModel)]="meal.date" class="input-lg meal-form"/>
  </div>
  `
})

export class EditMealComponent {
  public Meal: Meal;
}
