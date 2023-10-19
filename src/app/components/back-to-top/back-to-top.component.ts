import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
})
export class BackToTopComponent {
  showScrollToTopButton = false;

  constructor() {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
