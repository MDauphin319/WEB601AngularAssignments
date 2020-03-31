import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {
  @Input () font: string;
  constructor(private elm: ElementRef) {
  }

  @HostListener('mouseover') onhover() {
    if (this.font) {
      this.fontWeight('bold');
    } else {
      this.underlineMe('underline');
    }
  }

  @HostListener('mouseleave') onLeave() {
    if(this.font) {
      this.fontWeight('');
    } else {
      this.underlineMe('none');
    }
  }

  private underlineMe(textStyle: string): void {
    this.elm.nativeElement.style.textDecoration = textStyle;
  }

  private fontWeight(text: string): void {
    this.elm.nativeElement.style.fontWeight = text;
  }

}
