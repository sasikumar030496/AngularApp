import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplyColor]',
  standalone: true
})
export class ApplyColorDirective {

  constructor(eref : ElementRef) { 
    eref.nativeElement.style.color = "purple"
  }

}
