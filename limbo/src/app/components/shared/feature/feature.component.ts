import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../interfaces/feature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  featureData: Feature[] = [
    { id: 'feature1', image: 'Image1', title: 'Tltle1', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                               Nobis quo rerum optio excepturi eum voluptates ipsam aperiam, corporis 
                                               provident magni dolores ipsa ducimus ratione, quibusdam eius adipisci itaque 
                                               numquam rem.` },
    { id: 'feature2', image: 'Image2', title: 'Title2', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                               Nobis quo rerum optio excepturi eum voluptates ipsam aperiam, corporis 
                                               provident magni dolores ipsa ducimus ratione, quibusdam eius adipisci itaque 
                                               numquam rem.` },
    { id: 'feature3', image: 'Image3', title: 'Title3', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                               Nobis quo rerum optio excepturi eum voluptates ipsam aperiam, corporis 
                                               provident magni dolores ipsa ducimus ratione, quibusdam eius adipisci itaque 
                                               numquam rem.` }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
