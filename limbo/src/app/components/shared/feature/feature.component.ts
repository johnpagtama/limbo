import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../interfaces/feature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  featureData: Feature[] = [
    { className: 'layout-home__feature-1', heading: 'Join a community or start your own', feature1: 'Manage members and grant special privileges.', feature2: 'Create private channels and many more.' },
    { className: 'layout-home__feature-2', heading: 'Easily keep in touch', feature1: 'Chat with old friends or make new ones.', feature2: 'Friends are notified when you are connected.' },
    { className: 'layout-home__feature-3', heading: 'A place to meet like minded individuals', feature1: 'Discuss your interests', feature2: 'Share ideas' },
  ];

  // classes: {}[] = [
  //   { className: 'layout-home__feature-1' },
  //   { className: 'layout-home__feature-2' },
  //   { className: 'layout-home__feature-3' },
  // ];

  // features: Feature[] = [
  //   { className: 'layout-home__feature-1', heading: 'Join a community or start your own', feature1: 'Manage members and grant special privileges.', feature2: 'Create private channels and many more.' },
  //   { className: 'layout-home__feature-2', heading: 'Easily keep in touch', feature1: 'Chat with old friends or make new ones.', feature2: 'Friends are notified when you are connected.' },
  //   { className: 'layout-home__feature-3', heading: 'A place to meet like minded individuals', feature1: 'Discuss your interests', feature2: 'Share ideas' },
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // loop = () => this.features.map(x => console.log(x.className));

}
