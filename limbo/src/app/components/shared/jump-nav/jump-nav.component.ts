import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jump-nav',
  templateUrl: './jump-nav.component.html',
  styleUrls: ['./jump-nav.component.scss']
})
export class JumpNavComponent implements OnInit {
  jumpNavData: any[] = [
    { gridArea: 'jump-nav__anchor1', classes: 'jump-nav__txt-dec-none', link: '#feature1', text: 'Section 1' },
    { gridArea: 'jump-nav__anchor2', classes: 'jump-nav__txt-dec-none', link: '#feature2', text: 'Section 2' },
    { gridArea: 'jump-nav__anchor3', classes: 'jump=nav__txt-dec-none', link: '#feature3', text: 'Section 3' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
