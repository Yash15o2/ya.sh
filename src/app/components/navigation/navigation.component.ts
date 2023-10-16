import { Component } from '@angular/core';

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

  setActiveItem(item: any) {
    this.activeItem = item;
  }
}
