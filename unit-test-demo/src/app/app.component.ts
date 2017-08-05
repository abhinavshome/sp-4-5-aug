import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <span>{{counter}}</span>
    <button (click)="increment()" class="inc">+</button>
    <button (click)="decrement()" class="dec">-</button>
    `,
})
export class AppComponent  { 
  name = 'Angular'; 
  counter: number = 1;

  increment() {
    if(this.counter < 5)
      this.counter++;
  }

  decrement(){
    if(this.counter > 1)
      this.counter--;
  }
}
