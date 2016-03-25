import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: true
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredMealState = args[0];
    //console.log(args[0]);
    if (desiredMealState === "low") {
      return input.filter((meal) => {
        return meal.calories < 300;
      })
    }
    if (desiredMealState === "high") {
      return input.filter((meal) => {
        return meal.calories > 300;
      })
    }
    else {
      return input;
    }
  }
}
