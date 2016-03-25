import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { NamePipe } from './name.pipe';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [NamePipe, CaloriesPipe],
  templateUrl: 'app/meal-list.component.html'
})


export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterName: string = "all";
  public filterCalories: string = "";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
    console.log(clickedMeal);
  }

  onNameChange(filterOption) {
    this.filterName = filterOption;
  }
  onCalorieChange(filterOption) {
    this.filterCalories = filterOption;
  }
  createMeal(mealArray): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], this.mealList.length)
    );
  }
}
