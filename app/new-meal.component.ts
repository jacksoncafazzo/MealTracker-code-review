import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  templateUrl: 'app/new-meal.component.html'
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var mealArray: string[] = [userName.value, userDetails.value, userCalories.value];
    this.onSubmitNewMeal.emit(mealArray);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
