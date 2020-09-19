import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  headerLinks: Link[] = [
    { gridAreaClass: 'main-nav__limbo', link: '#', text: 'Why Limbo?' },
    { gridAreaClass: 'main-nav__updates', link: '#', text: 'Updates' },
    { gridAreaClass: 'main-nav__pricing', link: '#', text: 'Pricing' },
    { gridAreaClass: 'main-nav__support', link: '#', text: 'Support' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
