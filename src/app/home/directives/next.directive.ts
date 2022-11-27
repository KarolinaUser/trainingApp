import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunct(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var carousel_card = elm.getElementsByClassName("carousel_card");
    elm.append(carousel_card[0]);

  }

}
