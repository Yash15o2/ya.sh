import { Component, HostListener } from '@angular/core';

interface Navigation {
  title: string;
  route: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  navList: any = [
    {
      title: 'home',
      route: '/home',
    },
    {
      title: 'work',
      route: '/work',
    },
    {
      title: 'about',
      route: '/about',
    },
    {
      title: 'contact',
      route: '/contact',
    },
  ];
  activeItem: Navigation = this.navList[0];
  reachedBottom: boolean = false;

  // to hide navigation menu when reached to bottom
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollY = window.scrollY;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const bottomPosition = documentHeight - windowHeight;
    this.reachedBottom = scrollY >= bottomPosition;
  }

  setActiveItem(item: any) {
    this.activeItem = item;
  }
}
