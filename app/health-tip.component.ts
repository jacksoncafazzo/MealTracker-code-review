import { Component } from 'angular2/core';

@Component({
  selector: 'health-tips',
  template: `
  <li>Take a 30 minute walk: 100 calories</li>
  <li>Do 10 minutes of squats: 75 calories</li>
  <li>Do 10 minutes of lunges: 80 calories</li>
  <li>Don 10 of push-ups: 60 calories</li>
  <li>Plank for 10 minutes: 40 calories</li>
  <li>Jump rope for 10 minutes: 120 calories</li>
  `
})

export class HealthTipComponent {
  constructor(){

  }
}
