import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cursor = this.el.nativeElement.querySelector('.cursor');
    this.renderer.setStyle(cursor, 'top', e.pageY - 10 + 'px');
    this.renderer.setStyle(cursor, 'left', e.pageX - 10 + 'px');
  }
}
