import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Terminal } from 'src/app/shared/interfaces/terminal';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent implements OnInit, OnDestroy {
  terminalContent!: string[];
  displayedContent: string[] = [];
  loader: string[] = ['|', '/', '-', '\\'];
  loaderSymbol: string = '';
  interval!: ReturnType<typeof setInterval>;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Terminal>('assets/json/terminal-content.json')
      .subscribe((terminalData: Terminal) => {
        this.terminalContent = terminalData.content;
        this.processTerminalContent();
      });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  processTerminalContent() {
    this.displayTerminalContent();

    const formattedDate = new Date().toISOString();
    this.terminalContent[1] = `Build at: <b>${formattedDate}</b> - Hash:`;

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 6000);
  }

  displayTerminalContent() {
    let currentIndex = 0;

    this.interval = setInterval(() => {
      if (currentIndex < this.terminalContent.length) {
        this.displayedContent.push(this.terminalContent[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(this.interval);
        this.displayLoader();
      }
    }, 300);
  }

  displayLoader() {
    let loaderIndex = -1;

    this.interval = setInterval(() => {
      if (loaderIndex < this.loader.length - 1) {
        loaderIndex++;
      } else {
        loaderIndex = 0;
      }
      this.loaderSymbol = this.loader[loaderIndex];
    }, 200);
  }
}
