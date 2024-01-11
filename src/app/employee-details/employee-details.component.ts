import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IEmp } from '../iemp';
import { ApplyColorDirective } from '../apply-color.directive';
import { EmployeeDataService } from '../employee-data.service';
import { NamePrefixPipe } from '../name-prefix.pipe';
import { SalaryTypePipe } from '../salary-type.pipe';

@Component({
  selector: 'EmployeeDetailsComponentSelector',
  standalone: true,
  imports: [CommonModule, ApplyColorDirective, NamePrefixPipe, SalaryTypePipe],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

    constructor(public employeeDataService : EmployeeDataService){}
        eid : number = 101;
        ename : string = "Ram";
        esal : number = 35000;

        salFlag : boolean = false;

        showSal(){
          this.salFlag = true;
        }
        empList : IEmp[] = [{eid:101, ename:"Ram", esal:35000, edob :"6/3/1988", gender : "male", location : "USA"},
                   {eid:102, ename:"Reba", esal:25000, edob :"8/1/1997", gender : "female", location : "USA"},
                   {eid:103, ename:"John", esal:46000, edob :"7/9/1998", gender : "female", location : "India"},]

        textColor : string = "red";

        getRecords(){
          this.empList = this.employeeDataService.getEmployeeRecords();
        }

        trackByEid(index : number, record : IEmp){
          return record.eid;
        }
}
