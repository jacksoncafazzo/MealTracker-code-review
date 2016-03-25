import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { NamePipe } from './name.pipe';
import { CaloriesPipe } from './calories.pipe';
import { HealthTipComponent } from './health-tip.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, EditMealComponent, HealthTipComponent],
  pipes: [NamePipe, CaloriesPipe],
  templateUrl: 'app/meal-list.component.html'
})


export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterName: string = "all";
  public filterCalories: string = "";
  public dayTotal: number = 0;
  public dayAverage: number = 0;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
    console.log(new Date());
  }

  onNameChange(filterOption) {
    this.filterName = filterOption;
  }
  onCalorieChange(filterOption) {
    this.filterCalories = filterOption;
  }
  createMeal(mealArray): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], new Date(), this.mealList.length)
    );
  }
  totalCalories(mealList): void {
    var total: number = 0;
    console.log(mealList);
    mealList.forEach(function(meal){
      total = total + +(meal.calories);
    });
    console.log(total);
    this.dayTotal = total;
  }
  averageCalories(mealList): void {
    var average = 0;
    mealList.forEach(function(meal){
      average = average + +(meal.calories);
    });
    average = average / mealList.length;
    console.log(average);
    this.dayAverage = Math.round(average);
  }
}
