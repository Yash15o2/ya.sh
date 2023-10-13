import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnlargeCursorService {
  cursorSize: string = '10px';
  constructor() {}

  triggerSizeChange(size: string) {
    this.cursorSize = size + 'px';
    console.log('called', this.cursorSize);
  }
}
