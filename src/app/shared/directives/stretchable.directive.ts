import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStretchable]',
})
export class StretchableDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  link!: HTMLElement;

  @HostListener('mouseover') onMouseOver() {
    if (this.el.nativeElement.tagName === 'A') {
      this.link = this.el.nativeElement;
    } else {
      this.link = this.el.nativeElement.querySelector('a');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.link, 'letter-spacing', '2px');
    this.renderer.setStyle(
      this.link,
      'transition',
      '0.4s cubic-bezier(0.45, 0, 0.3, 1)'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.link, 'letter-spacing');
  }
}
