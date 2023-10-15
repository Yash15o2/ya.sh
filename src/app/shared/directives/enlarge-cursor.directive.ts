import { EnlargeCursorService } from 'src/app/shared/services/enlarge-cursor.service';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEnlargeCursor]',
})
export class EnlargeCursorDirective {
  enlargeCursorSize: string = '45';
  contractCursorSize: string = '10';

  constructor(private enlargeCursorService: EnlargeCursorService) {}

  @HostListener('mouseover') onMouseOver() {
    this.enlargeCursorService.triggerSizeChange(this.enlargeCursorSize);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.enlargeCursorService.triggerSizeChange(this.contractCursorSize);
  }

  @HostListener('click') onMouseClick() {
    this.enlargeCursorService.triggerSizeChange(this.contractCursorSize);
  }
}
