import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  headerLinks: Link[] = [
    { gridArea: 'main-nav__links', classes: 'main-nav__txt-dec-none main-nav__txt-white', link: '#', text: 'Why Limbo?' },
    { gridArea: 'main-nav__links', classes: 'main-nav__txt-dec-none main-nav__txt-white', link: '#', text: 'Updates' },
    { gridArea: 'main-nav__links', classes: 'main-nav__txt-dec-none main-nav__txt-white', link: '#', text: 'Pricing' },
    { gridArea: 'main-nav__links', classes: 'main-nav__txt-dec-none main-nav__txt-white', link: '#', text: 'Support' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
