import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bit-button]'
})
export class BitButtonDirective {
  style: string[] = [];
  constructor(public el: ElementRef, private render: Renderer2) { 
    this.style = [
      el.nativeElement.style.display = 'inline-block',
      el.nativeElement.style.margin = '5px',
      el.nativeElement.style.padding = '5px 2px',
      el.nativeElement.style.minWidth = '8rem',
      el.nativeElement.style.height = '3rem',
      el.nativeElement.style.border = '5px',
      el.nativeElement.style.borderRadius = '1px solid transparent',
      el.nativeElement.style.backgroundColor = 'transparent'
    ];
    
    this.render.addClass(el.nativeElement, 'bit-button');
  }

}
