import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  footerLinks: any[] = [
    { link: '#', text: 'About Us' },
    { link: '#', text: 'Privacy' },
    { link: '#', text: 'Terms of Use' },
    { link: '#', text: 'License'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
