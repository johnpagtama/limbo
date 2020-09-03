import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerLinks = [ 
    { link: '#', text: 'Why Limbo?' },
    { link: '#', text: 'Updates' },
    { link: '#', text: 'Pricing' },
    { link: '#', text: 'Support' }
  ];

  footerLinks = [
    { link: '#', text: 'About Us' },
    { link: '#', text: 'Privacy' },
    { link: '#', text: 'Terms of Use' },
    { link: '#', text: 'License'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
