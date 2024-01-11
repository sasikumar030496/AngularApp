import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'WelcomeComponentSelector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
        @Input()
        company : string = "Accenture"
        buttonFlag : boolean = false;
        userValue : string = ""
        showMessage(){
          this.company = this.userValue
        }
}
