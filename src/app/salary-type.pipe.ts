import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryType',
  standalone: true
})
export class SalaryTypePipe implements PipeTransform {

  transform(salary : number, location : string,): unknown {
    if(location === "USA"){
      const USDSal = (salary/80);
      return "USD "+USDSal.toString()
    }
    else{
      return 'INR '+salary.toString(); 
    }
  }

}
