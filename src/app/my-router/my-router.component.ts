import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'MyRouterComponentSelector',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './my-router.component.html',
  styleUrl: './my-router.component.css'
})
export class MyRouterComponent {

}
