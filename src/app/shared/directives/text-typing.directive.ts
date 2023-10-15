import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextTyping]',
})
export class TextTypingDirective implements OnInit {
  @Input('appTextTyping') words: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.innerText = this.words[0];
    setTimeout(() => {
      this.deletingEffect(this.words[0], 0);
    }, 1000);
  }

  deletingEffect(word: string, index: number) {
    const element = this.el.nativeElement;
    let i = word.length;
    const deleteInterval = setInterval(() => {
      element.innerText = word.substring(0, i);
      i--;
      if (i < 0) {
        clearInterval(deleteInterval);
        setTimeout(() => {
          this.typingEffect((index + 1) % this.words.length);
        }, 1000);
      }
    }, 100);
  }

  typingEffect(index: number) {
    if (index < this.words.length) {
      const word = this.words[index];
      const element = this.el.nativeElement;
      element.innerText = '';
      let i = 0;
      const typeInterval = setInterval(() => {
        element.innerText += word[i];
        i++;
        if (i >= word.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            this.deletingEffect(word, index);
          }, 1000);
        }
      }, 100);
    }
  }
}
