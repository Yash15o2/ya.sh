import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ScrambleQueue } from 'src/app/shared/interfaces/scramble-queue';

@Directive({
  selector: '[appTextScramble]',
})
export class TextScrambleDirective implements OnInit, OnDestroy {
  @Input('appTextScramble') delay: number = 20;
  phrases: string[] = [];

  private element: HTMLElement;
  // private chars: string =
  //   'qwertyuiopasdfghjklzxcvbnm1234567890@#$%&'.toUpperCase();
  private chars: string = '10';
  private scrambleQueue: ScrambleQueue[] = [];
  private frameRequest: number = 0;
  private frame: number = 0;
  private resolve: any;
  private counter: number = 0;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.phrases = [this.el.nativeElement.innerText];
    this.scrambler();
    // setInterval(() => this.scrambler(), this.delay * 1000);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.frameRequest);
  }

  scrambler() {
    const oldText = this.element.innerText;
    const newText = this.phrases[this.counter];
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => {
      return (this.resolve = resolve);
    });
    this.scrambleQueue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = this.frame;
      const end = start + 50;
      this.scrambleQueue.push({ from, to, start, end });
    }

    this.frame = 0;
    this.update();
    this.counter = (this.counter + 1) % this.phrases.length;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.scrambleQueue.length; i < n; i++) {
      let { from, to, start, end, char } = this.scrambleQueue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          if (from === ' ') char = ' ';
          else char = this.randomChar();
          this.scrambleQueue[i].char = char;
        }
        output += `<span>${char}</span>`;
      } else {
        output += from;
      }
    }

    this.element.innerHTML = output;

    if (complete === this.scrambleQueue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(() => this.update());
      this.frame++;
    }
  }

  private randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
