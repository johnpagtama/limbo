import { Component, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  footerLinks: Link[] = [
    { gridArea: 'main-about', classes: '', link: '#', text: 'About Us' },
    { gridArea: 'main-privacy', classes: '', link: '#', text: 'Privacy' },
    { gridArea: 'main-terms', classes: '', link: '#', text: 'Terms of Use' },
    { gridArea: 'main-license', classes: '', link: '#', text: 'License' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
