import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'ParentComponentSelector',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
        parentCompany: string = "Accenture India";
}
