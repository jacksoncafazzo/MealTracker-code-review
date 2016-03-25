import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { NamePipe } from './name.pipe';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [NamePipe],
  templateUrl: 'app/meal-list.component.html'
})

export class MealListComponent {
  public mealList: Meal[];

  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterName: string = "all";
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
    console.log(filterOption);
  }
  createMeal(mealArray): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], this.mealList.length)
    );
  }
}
