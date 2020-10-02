import { Component, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  footerLinks: Link[] = [
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none main-footer__txt-white', link: '#', text: 'About Us' },
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none main-footer__txt-white', link: '#', text: 'Privacy' },
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none main-footer__txt-white', link: '#', text: 'Terms of Use' },
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none main-footer__txt-white', link: '#', text: 'License' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
