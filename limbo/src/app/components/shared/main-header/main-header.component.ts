import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  headerLinks: Link[] = [
    { link: '#', text: 'Why Limbo?' },
    { link: '#', text: 'Updates' },
    { link: '#', text: 'Pricing' },
    { link: '#', text: 'Support' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
