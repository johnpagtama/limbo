import { Component, OnInit } from '@angular/core';
import { Card } from '../../../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  perks: any[] = [
    ['Access up to 10,000 recent messages', '5GB file storage', '5 servers'],
    ['Unlimited access to all messages', '10GB file storage', '10 servers'],
    ['Unlimited access to all messages', '1TB file storage', 'Unlimited servers']
  ];

  cardData: Card[] = [
    { title: 'Free', 
      description: 'For individuals or small teams', 
      price: '$0/month', 
      buttonText: 'Get Started' },

    { title: 'Standard', 
      description: 'For small to medium-sized companies', 
      price: '$8.00/month', 
      buttonText: 'Get Started' },

    { title: 'Enterprise', 
      description: 'For large-scale corporations', 
      price: '$40.00/month', 
      buttonText: 'Get Started' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
