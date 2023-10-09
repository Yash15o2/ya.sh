import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent implements OnInit, OnDestroy {
  loader: string[] = ['/', '-', '\\', '-'];
  loading: string = '';
  interval: any;
  terminalContent = [
    'yash/madewithlove > ng serve',
    '',
    '6d6164776974686c6f7665 - Time: 115ms',
    '<span class="green-text">CREATE</span> yash/madewithlove/awesome.css',
    '<span class="green-text">CREATE</span> yash/madewithlove/portfolio.ts',
    '<span class="green-text">✔</span> Compiled successfully. ',
    '<span class="green-text">✔</span> Browser application bundle generation complete.',
    '<b>Initial Chunk Files</b> | <b>Names</b>   | <b>Raw Size</b> |',
    '<span class="green-text">main.js</span>             | main    | <span class="cyan-text">15.74 kB</span> | ',
    '<span class="green-text">runtime.js</span>          | runtime |  <span class="cyan-text">6.51 kB</span> | ',
    '<span class="myClass">👋 Welcome to my portfolio website...</span>',
  ];

  displayedContent: string[] = [];
  currentIndex: number = 0;
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  ngOnInit() {
    this.displayContentWithDelay();

    const formattedDate = new Date().toISOString();

    this.terminalContent[1] = `Build at: <b>${formattedDate}</b> - Hash:`;

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 6000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  displayContentWithDelay() {
    const delay = 300;

    this.interval = setInterval(() => {
      if (this.currentIndex < this.terminalContent.length) {
        this.displayedContent.push(this.terminalContent[this.currentIndex]);
        this.currentIndex++;
      } else {
        clearInterval(this.interval);
        this.displayLoaderSymbols();
      }
    }, delay);
  }

  displayLoaderSymbols() {
    const delay = 200;
    let loaderIndex = -1;

    this.interval = setInterval(() => {
      if (loaderIndex < this.loader.length - 1) {
        loaderIndex++;
      } else {
        loaderIndex = 0;
      }
      this.loading = this.loader[loaderIndex];
    }, delay);
  }
}
