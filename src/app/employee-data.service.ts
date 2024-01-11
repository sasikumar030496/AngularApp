import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  getEmployeeRecords(){
    return [{eid:101, ename:"Ram", esal:35000, edob :"9/11/1995", gender : "male", location : "USA"},
    {eid:102, ename:"Reba", esal:25000, edob :"5/10/1987", gender : "female", location : "USA"},
    {eid:103, ename:"John", esal:46000, edob :"1/18/1989", gender : "female", location : "India"},
    {eid:104, ename:"Helen", esal:43000, edob :"6/26/1992", gender : "male", location : "India"},
    {eid:105, ename:"Synpton", esal:66000, edob :"5/15/1995", gender : "female", location : "USA"}]
  }
}
