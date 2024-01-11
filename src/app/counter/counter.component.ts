import { Component } from '@angular/core';

@Component({
  selector: 'CounterComponentSelector',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue = 0;
  incrementCounter(){
    this.counterValue+=1
  }

  decrementCounter(){
    this.counterValue-=1
  }

}
