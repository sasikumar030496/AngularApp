import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePrefix',
  standalone: true
})
export class NamePrefixPipe implements PipeTransform {

  transform(name : string, gender : string): unknown {
    if(gender ==="male"){
      return "Mr. "+ name;
    }
    else{
      return "Mrs. "+ name;
    }
  }

}
