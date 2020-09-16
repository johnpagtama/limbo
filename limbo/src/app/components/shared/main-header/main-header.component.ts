import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  headerLinks: any = [
    { link: '#', text: 'Why Limbo?' },
    { link: '#', text: 'Updates' },
    { link: '#', text: 'Pricing' },
    { link: '#', text: 'Support' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
