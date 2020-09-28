import { Component, OnInit } from '@angular/core';
import { Card } from '../../../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardData: Card[] = [
    { title: 'Free', 
      description: 'For individuals or small teams', 
      price: '$0/month', 
      buttonText: 'Get Started',
      messageCap: 'Access up to 10,000 recent messages',
      storageCap: '5GB file storage',
      serverCap: '5 servers'
    },

    { title: 'Standard', 
      description: 'For small to medium-sized companies', 
      price: '$8.00/month', 
      buttonText: 'Get Started',
      messageCap: 'Unlimited access to all messages',
      storageCap: '10GB file storage',
      serverCap: '10 servers'
     },

    { title: 'Enterprise', 
      description: 'For large-scale corporations', 
      price: '$40.00/month', 
      buttonText: 'Get Started',
      messageCap: 'Unlimited access to all messages',
      storageCap: '1TB file storage',
      serverCap: 'Unlimited servers'
     }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
