import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor() {}
  date: Date = new Date();
  indiaTime: string = '';
  resumeUrl: string = 'assets/docs/resume.pdf';
  interval: any;

  ngOnInit(): void {
    this.getIndianTime();
    setInterval(() => {
      this.getIndianTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getIndianTime() {
    this.interval = this.indiaTime = new Date()
      .toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
      })
      .slice(0, -3);
  }
}
