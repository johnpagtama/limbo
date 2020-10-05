import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  os: string = navigator.userAgent.split('(').pop().split(';').shift().split(' ').shift();
  
  constructor() { }

  ngOnInit(): void {
  }

}
