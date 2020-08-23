import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  servers: string[] = ['💩💩💩💩💩'];
  constructor() { }
  
  ngOnInit(): void {
  }

}
