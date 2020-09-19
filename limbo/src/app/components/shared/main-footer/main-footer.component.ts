import { Component, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  footerLinks: Link[] = [
    { gridAreaClass: 'main-about', link: '#', text: 'About Us' },
    { gridAreaClass: 'main-privacy', link: '#', text: 'Privacy' },
    { gridAreaClass: 'main-terms', link: '#', text: 'Terms of Use' },
    { gridAreaClass: 'main-license', link: '#', text: 'License' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
