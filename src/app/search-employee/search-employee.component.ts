import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'SearchEmployeeComponentSelector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent {
        userInput : number = 0;
        @Output()
        searchEvent :EventEmitter<number> = new EventEmitter<number>();
        
        generateEvent(){
          this.searchEvent.emit(this.userInput);
        }
}
