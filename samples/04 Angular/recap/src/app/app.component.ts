import { Component } from '@angular/core';
import {Contact} from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Ori";
  counter: number = 0;
  contacts: Contact[];
  contacts2: Contact[];

  constructor() {
    this.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];

    this.contacts2 = this.contacts.slice(0, 2);
  }

  inc() {
    ++this.counter;
  }
}

