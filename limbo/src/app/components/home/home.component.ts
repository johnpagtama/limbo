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
  
  btn = () => console.log('btn clicked');
  btnOutline = () => console.log('btnOutline clicked');
  btnPill = () => console.log('btnPill clicked');
  btnPillOutline = () => console.log('btnPillOutline clicked');
  btnFab = () => console.log('btnFab clicked');
  btnFabOutline = () => console.log('btnFabOutline clicked');

}
