import { Component, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  footerLinks: Link[] = [
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none', link: '#', text: 'About Us' },
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none', link: '#', text: 'Privacy' },
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none', link: '#', text: 'Terms of Use' },
    { gridArea: 'main-footer__links', classes: 'main-footer__txt-dec-none', link: '#', text: 'License' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
