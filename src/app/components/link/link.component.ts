import { Component, Input, OnInit } from '@angular/core';
import { LinkList } from 'src/app/shared/interfaces/link-list';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() listHeading: string = '';
  @Input() linkList: LinkList[] = [];
  showListHeading: boolean = false;
  linkArrowIcon: string = 'assets/icons/link-arrow.svg';

  ngOnInit(): void {
    console.log(this.listHeading);
    this.showListHeading = this.listHeading !== '';
    this.linkList = [
      {
        title: 'Instagram',
        redirectTo: '/',
      },
      {
        title: 'X',
        redirectTo: '/',
      },
      {
        title: 'LinkedIn',
        redirectTo: '/',
      },
    ];
  }
}
