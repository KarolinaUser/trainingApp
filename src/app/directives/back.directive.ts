import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBack]'
})
export class BackDirective {

  constructor(private el: ElementRef) { }


  @HostListener('click')
  prevFunct(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var carousel_card = elm.getElementsByClassName("carousel_card");
    elm.prepend(carousel_card[carousel_card.length - 1]);

  }

}
