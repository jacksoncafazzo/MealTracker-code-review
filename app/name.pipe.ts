import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "name",
  pure: false
})
export class NamePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredMealState = args[0];
    console.log(args[0]);
    if (desiredMealState !== "names") {
      return input.filter((meal) => {
        return meal.name === args[0];
      })
    }
    else {
      return input;
    }
  }
}
