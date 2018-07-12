import { Component } from '@angular/core';
import {store} from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        // {"id": 3, "name": "Udi"}
    ];

    // this.contacts = [];
    // for(let i=0; i<2500; i++) {
    //   this.contacts = this.contacts.concat(contacts);
    // }

    console.log("AppComponent.ctor 7");
  }

  onClockTick1(time) {
    console.log("tick 1", time);
  }

  onClockTick2() {
    console.log("tick 2");
  }
}

interface Contact {
    id: number;
    name: string;
}
