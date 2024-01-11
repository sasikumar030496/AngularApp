import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'HomeComponentSelector',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    userid : string = "";
    constructor(public currentpath : ActivatedRoute){
            currentpath.paramMap.subscribe((data)=>this.userid = String(data.get('userid')))
    }

}
