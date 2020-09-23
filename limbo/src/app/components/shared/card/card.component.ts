import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardData: any[] = [
    {title: 'title1', text: 'text1'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
