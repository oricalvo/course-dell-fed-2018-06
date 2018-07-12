import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  name: string;

  constructor() {
    this.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];

    this.name = "XXX";
  }

  add() {
    const contact = {
      id: -1,
      name: this.name,
    };

    this.contacts.push(contact);
  }
}

interface Contact {
  id: number;
  name: string;
}
