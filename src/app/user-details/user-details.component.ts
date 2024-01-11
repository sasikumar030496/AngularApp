import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { HTTPUserService } from '../httpuser.service';

@Component({
  selector: 'UserDetailsComponentSelector',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  userData : IUser = {"id":1,"firstName":"Terry","lastName":"Medhurst","email":"atuny0@sohu.com","phone":"+63 791 675 8914"}
  constructor(public httpUserService : HTTPUserService){}
   
  ngOnInit(): void {
    this.httpUserService.getUserData().subscribe((data)=> this.userData = data);  // calling API and assigning data to userData
  }
        
}
