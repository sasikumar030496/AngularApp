import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class HTTPUserService {

  constructor(public httpRef : HttpClient) { 
    
  }

  getUserData() : Observable<IUser>{
          return this.httpRef.get<IUser>("https://dummyjson.com/users/1");
  }
}
