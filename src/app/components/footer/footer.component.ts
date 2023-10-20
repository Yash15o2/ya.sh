import { Component } from '@angular/core';
import { LinkList } from 'src/app/shared/interfaces/link-list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  iconHeight: number = 40;
  footerTrackList: string[] = [
    "let's talk",
    "let's talk",
    "let's talk",
    "let's talk",
  ];

  socialList: LinkList[] = [
    {
      title: 'LinkedIn',
      redirectTo: 'https://www.linkedin.com/in/yash-thakur-73662919b/',
    },
    {
      title: 'Github',
      redirectTo: 'https://github.com/Yash15o2',
    },
    {
      title: 'Bēhance',
      redirectTo: 'https://www.behance.net/yashthakur18',
    },
    {
      title: 'Dribbble',
      redirectTo: 'https://dribbble.com/yash1502',
    },
  ];

  navigationList: LinkList[] = [
    {
      title: 'Home',
      redirectTo: '/',
    },
    {
      title: 'Work',
      redirectTo: '/',
    },
    {
      title: 'About',
      redirectTo: '/',
    },
    {
      title: 'Contact',
      redirectTo: '/',
    },
  ];
}
