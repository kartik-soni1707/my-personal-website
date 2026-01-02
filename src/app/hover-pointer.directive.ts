import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverPointer]' // how we'll use it in HTML
})
export class HoverPointerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  originalColor:any;
  hoverColor ="red";
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.originalColor = this.el.nativeElement.style.color; // save original color
    this.renderer.setStyle(this.el.nativeElement, 'color', this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'default');
    this.renderer.setStyle(this.el.nativeElement, 'color', this.originalColor);
  }
}
