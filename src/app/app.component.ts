import { EnlargeCursorService } from 'src/app/shared/services/enlarge-cursor.service';
import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cursorDistance: number = 5;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public enlargeCursorService: EnlargeCursorService
  ) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cursor = this.el.nativeElement.querySelector('.cursor');
    this.cursorDistance =
      this.enlargeCursorService.cursorSize === '10px' ? 5 : 20;

    this.renderer.setStyle(cursor, 'top', e.pageY - this.cursorDistance + 'px');
    this.renderer.setStyle(
      cursor,
      'left',
      e.pageX - this.cursorDistance + 'px'
    );
  }

  @HostListener('document:click', ['$event'])
  onMouseClick(e: MouseEvent) {
    const cursor = this.el.nativeElement.querySelector('.cursor');

    this.cursorDistance = 5;

    this.renderer.setStyle(cursor, 'top', e.pageY - this.cursorDistance + 'px');
    this.renderer.setStyle(
      cursor,
      'left',
      e.pageX - this.cursorDistance + 'px'
    );
  }
}
