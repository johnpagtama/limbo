import { Component, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  footerLinks: Link[] = [
    { link: '#', text: 'About Us' },
    { link: '#', text: 'Privacy' },
    { link: '#', text: 'Terms of Use' },
    { link: '#', text: 'License'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
